##CSS语法重点

### box-sizing 属性
* `border-sizing`为默认值时，由width, min-width, height, min-height与max-height控制内容的大小。
* 当`border-sizing: content-box`时，这里的所设置的宽和高只是content-area的宽和高，而如果内容区域content-area设置了背景，颜色或者图片，这些样式将会延伸到padding上，所以目测是变大了。
* 当`border-sizing: border-box`时，这里的宽和高包括了padding 和 border。若设置padding的宽和高，他将会挤content-area的大小。若不够挤，将会像外扩充。


### flex布局：
* `flex:`该属性是flex-grow, flex-shrink, flex-basis的简写，默认值为0 1 auto。后面两个属性可选。

### transition , transform, translate
transition: scale(5, 5), 0.5s
transform: translateX(-50%);
