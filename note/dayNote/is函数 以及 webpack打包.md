- [x] 实现ES6的is函数

- [ ] 实现一个深拷贝函数

- [x] webpack 打包之后dist下没有相关的文件

      ​

      ​

dist 文件夹下没有相关文件的原因是由于没有进行应该的webpack打包，之前是直接使用webpack-dev-server 命令直接开始，所有没有文件被打包。可以使用webpack命令根据相应的配置文件做一个打包。

实现一个对象的深拷贝的几个点： 

1. 递归拷贝
2. 循环引用

Object.create() 函数有没有继承第一个参数prototype的_proto_属性