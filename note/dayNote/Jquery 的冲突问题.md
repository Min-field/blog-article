##### Jquery 的冲突问题

由于某些jquery插件依赖比较老的jquery版本，因此在一个多个jquery版本的页面中，可以使用类似于

`var jqueryCopy = jquery.noConflict(true) `

来将jquery全局命名赋值给另一个变量，从而解决冲突，在页面规则抽取的

chrome插件中，就使用 `_20$_ = $.noConfict(true)` 的写法将插件引入的jquery代码和页面可能原有的jquery分割开，防止两个不同版本之间的命名冲突

