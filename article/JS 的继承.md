## JS 的继承

#### ES 的组合继承

所谓组合继承，就是使用原型链实现对原型属性和方法的继承，使用call函数或者apply函数实现对实例属性和方法的实现。

```javascript
// 父类
function Sup(name){
    this.name = name;
}
Sup.prototype.say = function(){
    console.log('Sup');
}

// 子类
function Sub(name, age){
    Sup.call(this, name);  // 继承父类的实例属性
    this.age = age; 
}
Sub.prototype = new Sup(); // 继承父类的原型属性以及对象
Sub.prototype.constructor = Sub; // 显示声明了Sub的原型的contructor指向当前的Sub构造函数

Sub.prototype.say = function(){
    console.log('Sub');
}
```

注意到上面的Sub.prototype = new Sup(), 这里有个小瑕疵，第一，这里第二次调用了父类的Sup函数，其次，子类的原型上多了父类的实例属性，同时，子类的contructor指向的是父类的Sup。



#### 使用Object.create()实现继承

ES5 的Object.create()函数传入一个原型对象以及一组属性描述符对象，create根据这两个参数构造一个新的对象，具体的构造方法为：

 	1. 首先新建一个对象
	2. 其次将该对象的__proto__指针指向传入的prototype对象
	3. 根据传入的属性描述符对象新建一系列属性

使用Object.create() 函数可以重写上述的组合继承，解决子类原型的数据冗余

```javascript
function Sub(name, age){
    Sup.call(this, name);
  	this.age = age; 
}
Sub.prototype = Object.create(Sup.prototype); 
Sub.prototype.constructor = Sub; 
```



同时，还可以使用create()函数实现多继承

```Javascript
function Sub(name, age){
    Sup1.call(this);       // 从第一个类继承实例属性
    Sup2.call(this);       // 从第二个类继承实例属性
}
Sub.prototype = Object.create(Sup1.prototype); // 从第一个类继承相关的方法
Object.assign(Sub.prototype, Sup2.prototype);  // 从第二个类继承相关的方法
Sub.prototype.constructor = Sub;  // 显式指向相应的constructor为当前类
```

*注意，这样的多继承，子类实例的__proto__ 指针指向的是第一个由Object.create() 函数的第一个参数，即那个传入的proto*



#### 使用ES6的class语法糖实现继承

##### es6 的class语法注意点

1. class中的方法定义在prototype上
2. class 中的静态方法定义在类上
3. class中方法与方法之前没有，

##### es6的class继承

es6 使用 `class Sup extends Sub`来实现继承，在继承中需要注意的点是super关键字

与组合继承不同的是，组合继承首先定义了子类实例的this值，然后根据父类的定义去修改this，而es6的class继承首先定义了父类实例的this值，然后根据子类实例的this值去修改，所以在es6的继承中需要注意的一点是在构造函数中使用super()来定义this

super关键字的三个注意

1. 在构造函数中，super指代的是父类的构造函数
2. 在子类的静态函数中，super指的是父类本身
3. 在子类的prototype函数中，super指的是父类的prototype