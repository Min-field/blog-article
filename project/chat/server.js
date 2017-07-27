const fs = require("fs"); 
const http = require("http"); 
// mime 根据文件的扩展名获取到文件的mime类型
const mime = require("mime"); 
const path = require("path");

// 对许多同样的请求，防止将数据频繁的从硬盘读文件，可以将文件存储到内存中
// 对不需要频繁去修改的变量，尽量用const去声明

var cache = {}

const send404 = function(response){
    response.writeHead(404, {
        'ContentType': 'text/plain'
    }); 
    response.write('Error 404: resource not found'); 
    response.end(); 
}

const sendFile = function(response, filePath, content){
    response.writeHead(200, {
        'ContentType': mime.lookup(path.basename(filePath))
    }); 
    response.write(content); 
    response.end(); 
}

const serveStatic = function(response, absPath, cache){
    if(cache[absPath]){
        sendFile(response, absPath, cache[absPath]); 
    } else {
        fs.exists(absPath, (exist) => {
            if(exist){
                fs.readFile(absPath, (err, data) => {
                    if(err){
                        send404(response); 
                    } else{
                        cache[path] = data; 
                        sendFile(response, absPath, data); 
                    }
                });
            } else{
                send404(response); 
            }
        })
    }
}

const handleRequset = function(request, response){
    let filePath = ''; 
    if(request.url === '/')
        filePath = 'public/index.html'; 
    else 
        filePath = 'public/' + request.url; 

    let absPath = './' + filePath; 
    serveStatic(response, absPath, cache);  
}

var server = http.createServer(handleRequset); 
server.listen(3000, function(){
    console.log('server listen in port 3000'); 
}); 












