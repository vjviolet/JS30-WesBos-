window.onload = init;

function init() {
	//这里由于不能每次都重新读取，所以要放在函数外面
	const secondHand = document.querySelector(".second-hand");
	const minHand = document.querySelector(".min-hand");
	const hourHand = document.querySelector(".hour-hand");
	
	//这个函数是每隔一秒，执行一次。
	function updateDate() {
		const date = new Date();
		const second = date.getSeconds();
		const secondDeg = (90 + (second / 60) * 360); 
		//这里加90是因为在开始时设置了90度的偏移，现在要将这个加回来，来保证一致
		
		const min = date.getMinutes();
		const minDeg = (90+(min/60)*360);
		
		const hour = date.getHours();
		const hourDeg = (90+(hour/12)*360+(min/12/60)*360); //加入分针所占的时间，可以使时针缓慢的移动
		
		//这里是为了解决跳顿问题。
		if(secondDeg===90) secondHand.style.transition = "all 0s";
		else secondHand.style.transition = "all .05s";
		
		if(minDeg===90) minHand.style.transition = "all 0s";
		else minHand.style.transition = "all 0.1s";
		
//		if(hourDeg === )

		secondHand.style.transform = `rotate(${ secondDeg }deg)`
		minHand.style.transform = `rotate(${ minDeg }deg)`
		hourHand.style.transform = `rotate(${ hourDeg }deg)`
	}
	
	setInterval(updateDate, 1000);
}
