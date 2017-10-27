window.onload = init;

function init() {
	//第一步要先得到所有的input框，并添加监听事件
	const inputs = document.querySelectorAll(".controls input");
	//这里来处理值的变化
	function handleUpdate() {
		//这里是在获取自定义的data- 属性，目的是为了得到后缀单位，对于没有单位的返回‘’；
		const suffix = this.dataset.sizing || '';
//		在 JavaScript 中 `document.documentElement` 即代表文档根元素。所以要改变全局的 CSS 变量，可以这样写：
		document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
		document.getElementById(`code-${this.name}`).innerText = this.value + suffix;
	}
	
	
	//用forEach遍历给每一个input添加一个监听事件
	inputs.forEach(input => input.addEventListener("change", handleUpdate));
	inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
}
