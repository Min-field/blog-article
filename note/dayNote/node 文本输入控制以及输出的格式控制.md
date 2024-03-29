- [x] c++的保留两位小数的操作

- [x] js保留两位小数的操作

- [x] js对文本输入之后的字符处理

- [x] 晚上的笔试面试题

- [x] 常见的排序算法

- [x] 什么样的排序算法被称为是稳定的排序

      ##### c++ 的输出保留两位小数

      在程序头部包括 `iomanip` 这个包，在输出流中控制具体的格式，如果想要控制输出的数字的小数点后面的位数，可以使用如下代码

      ```c++
      #include <iomanip>
      using namespace std; 
      int main(){
      	cout << setprecision(2) << fixed << 3.1415926 << endl;
      }
      ```

      *ps: c++中的数字在控制输入之后也会是自动4舍5入的*

      ##### js 保留两位小数的操作

      在js中可以使用 toFixed(2) 来自动控制小数点后面4舍5入后的数据,可以用如下的代码来控制

      ```javascript
      3.1415926.toFixed(2)
      ```

      ​

      ##### node 对输入的文本文件流的处理

      ​	首先需要打开标准输入流 `process.stdin.resume()` 并控制输入流的字符格式 `process.stdin.setEncoding('utf8')`

      ​	其次，对打开的并读入的文件，首先需要去做分行处理，并对文件的空行做跳过，对文本的每行的首位空字符也要做相应的处理

      ##### 正则表达式的位置匹配

      正则表达式的位置匹配一个常用的输入是(?=p) 其中p是一个表达式，表示的是在匹配到p这个字符串之前的位置，比如想要去匹配一个数字之前的空格，可以使用

      ```javascript
      \\s(?=\w)\ 
      ```

      来匹配

      ##### 什么是字符常量

      被单引号引起来的包括普通字符，转义字符等被称作是字符常量，包括数字

      ##### 排序算法的稳定性

      对于纯数字来讲，聊排序算法的稳定性毫无意义，排序的稳定性是指，在排序之后，对排序的键值相等的情况下，如果排序之后的两个元素的相对位置与排序前的两个元素的相对位置相同，那么就称这个排序算法是稳定的，否则，称这个排序是不稳定的，其中选择排序和快速排序都不是稳定的排序

      ##### 常见的排序算法

      ###### 冒泡排序

      不断的判断相邻的两个元素的大小关系，并将最大或者是最小的元素冒泡到正确的位置，一趟确定一个元素的正确位置，算法复杂性是 O(n * n)

      ###### 选择排序

      每次选择一个最大的或者是最小的数，并将当前的数与之交换，选择即为选择最大最小值，相对冒泡排序有很大的改进，因为不需要每次都去判断并交换两个数的位置， 算法复杂性是O(n*n)

      ###### 快速排序

      快速排序的算法复杂性是O(n*lgn)， 每次选择一个锚点，用两个指针分别从左从右两个方向先中间移动，判断并交换数组，直到将数组剖分为两个部分，对子数组继续做上述操作，得到排序后的数组

      ###### 堆排序

      关键是如何建堆以及如何维护一个堆**TODO**

      ​

      ​