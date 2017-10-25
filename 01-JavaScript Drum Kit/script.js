window.onload = init;

function init() {
	function playAudio(event) {
		const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		//要先获取键盘事件目标，通过模板字面量
		const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		
		if(!audio) return; //这里判断有没有找到相应的audio
		audio.currentTime = 0; //将audio的时间戳设置为0，当重复按键时，声音不会叠加
		audio.play();
		key.classList.add('playing'); //给当前的div添加一个高亮的类
	}
	
	function removeTransition(event) {
		if(event.propertyName !== "transform") return;   //判断这个事件的属性里面有没有transform
		this.classList.remove("playing");
	}
	
	const keys = Array.from(document.querySelectorAll('.key')); //ES6的新方法，将其他对象转换为数组。
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
	window.addEventListener('keydown', playAudio);
}
