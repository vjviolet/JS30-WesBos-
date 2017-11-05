### Chrome调试技巧：

1. 在调试的时候，在页面上找到要查看的元素，右键 -> 检查，会看到相应的代码，接着 右键 -> break on -> attribute modifications会进入调试页面，点击页面中的下一步会有运行。这样可以debug。
2. 字符替换： `console.log('My name is %s', 'zhou jie');`;
3. console中样式的设定： `console.log('%c I am an angel', 'font-size: 50px; color: pink');`， 记住样式之间的分隔是分号。
4. Warning: `console.warn('Be careful!');`;
5. Wrong: `console.error('You are wrong!');`;
6. Info: 用于输出信息，没有什么特别之处
7. Testing: `console.assert(p.innerHTML.match('BREAK'), 'right?');`, 当前面的判断正确时，后面字符串就不输出，当前面的判断错误时， 后面的字符串就输出。
8. Clearing: `console.clear()`;
9. View DOM elements: `console.dir(p);`, 这里会输出p的所有信息。
10. Grouping Together: `console.group(...), console.groupEnd(...)`， 其中这两个的信息必须保持一致。
11. Counting: 用来计数的。
12. Table: 可以将信息按表格的形式打印出来。
13. Timing: 获取处理该事件所用的时间
```js
const endpoint = 'https://api.github.com/users/vjviolet';
console.time('fetch data!');
fetch(endpoint)
	.then(blob => blob.json())
	.then(data => {
		console.timeEnd('fetch data!');
		console.log(data);
	})
```
