###HTML新特性
1. 首先是`<input type="range" />`的使用，这里的`range`可以设置最小值和最大值，其中可选的值就会在这个范围中变化。
2. 还有`<input type="color" />`的使用，这里只需要设置默认值就可以了。
3. HTML中自定义的`dataset`属性
	HTML5 中可以为元素添加非标准的自定义属性，只需要加上 `data-` 前缀，可以随便添加和命名。添加之后，可以通过元素的 `dataset` 属性来访问这些值，`dataset` 的值是 DOMStringMap 的一个实例化对象，其中包含之前所设定的自定义属性的“名-值”对。

### CSS变量的使用
* 这里是用`:root`伪类来匹配全局变量
```js
:root {
	--base: #fff;
}
//这里使用时，可以写为
.controls {
	color: var(--base);
}
```