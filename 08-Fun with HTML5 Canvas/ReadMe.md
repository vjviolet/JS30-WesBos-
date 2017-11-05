### Canvas
*  `<canvas>`是HTML5新增的元素，可用于通过使用js中的脚本来绘制图形，例如，它可以用来绘制图形，制作照片，创建动画，甚至可以进行实时视频处理或者渲染。
```js
<canvas id = 'tutorial' width = '150' height = '150'></canvas> 
```
* 渲染上下文，<canvas>元素创造了一个固定大小的画布，它公开了一个或者多个渲染上下文，其可以用来绘制和处理要展示的内容，我们将会把注意力放在2D渲染上下文中。
* canvas起初是空白的，为了展示，首先脚本要找到渲染上下文，然后在它上面绘制。<canvas>元素有一个叫做`getContext()`的方法，这个方法是用来获得渲染上下文和它的绘画功能。该方法只有一个参数，上下文的格式。
```js
var canvas = document.getElementById('tutorial');
vat ctx = canvas.getContext('2d');
```
* 绘制矩形： HTML中的元素canvas只支持一种原生的图形绘制： 矩形。所有其他的图形的绘制至少需要生成一条路径。
```js
//绘制矩形：
ctx.fillRect(x, y, width, height); //绘制一个填充的矩形
ctx.strokeRect(x, y, width, height); //绘制一个矩形的边框
ctx.clearRect(x, y, width, height); //清除指定矩形区域
```
* 绘制路径： 图形的基本元素是路径，路径是通过不同的颜色和宽度的线段和曲线相连形成的不同的形状的点的集合。
* 要用到以下函数：
```js
beginPath(); //新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
closePath(); //闭合路径之后图形绘制命令又重新指向到上下文中。
stroke(); //通过线条来绘制图形轮廓。
fill(); //通过填充路径的内容区域生成实心的图形
```
* 移动笔触： moveTo(x, y); //将笔触移动到指定的坐标x以及y上。
* 绘制直线，需要用到的方法是`lineTo()`。

* 色彩：
* 如果我们想要给图形上色，有两个重要的属性可以做到： fillStyle 和 strokeStyle。
```js
fillStyle = color; //设置图形的填充颜色
strokeStyle = color; //设置图形的轮廓颜色
```

* 线型： 可以通过一系列属性来设置线的样式： lineWidth = value: 设置线条的宽度, lineCap = type: 设置线条末端的样式， lineJoin = type: 设置线条与线条之间接合处的样式。