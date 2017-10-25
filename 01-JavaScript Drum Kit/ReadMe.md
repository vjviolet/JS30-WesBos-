### ES6语法：
1. `const`: 声明一个只读的变量，标识符的值只能赋值一次。
2. 模板字符串： 这个是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
```js
const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
```

### JS语法：
1. `querySelector`获取元素： `document.querySelector(css selectors);`
2. `transitionend`事件： 该事件在CSS完成过渡后触发。

### `forEach`与箭头函数：
* 使用`document.querySelector`获取一组符合css选择符的元素快照，类型为NodeList，对其进行遍历时可采用`forEach`方法。
```js
//ES6
nums.forEach(v => {
    if(v%5 === 0)
        fives.push(v);
})
nums.forEach(function(v){
    if(v%5===0) 
        fives.push(v);
})
```
