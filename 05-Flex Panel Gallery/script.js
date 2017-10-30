window.onload = init;
function init() {
	const panels = document.querySelectorAll('.panel');
	
	function toggleActive() {
		this.classList.toggle('open');
	}
	
	function toggleWord(e) {
		console.log(e.propertyName);
		if(e.propertyName.includes('flex')) return;
		//这里当点击事件发生，变化的只有flex-grow, 和 font-size
		this.classList.toggle('open-actived');
	}
	
	panels.forEach(panel => panel.addEventListener('click', toggleActive));
	panels.forEach(panel => panel.addEventListener('transitionend', toggleWord));
	
}
