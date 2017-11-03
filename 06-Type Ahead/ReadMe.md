###CSS语法
1. font-weight: 用来表示字体的粗细程度，一些字体只提供normal和bold两种值。`lighter`比从父元素继承来的更细。`bolder`比父元素继承来的值更粗。
2. box-shadow: inset(表示阴影在里面还是外面) <offset-x> <offset-y> <blur-radius>（表示阴影的厚度） <spread-radius>（这里取正值时，面积扩大，取负值时，面积缩小。） <color>
3. perspective: 设置从何处查看一个元素的角度。

### fetch: 
1. Fetch API提供了一个JS接口，用于访问和操纵HTTP管道的部分，例如请求和响应，它还提供了一个全局fetch()方法，该方法提供了一种简单，合乎逻辑的方式来跨网络异步获取资源。
2. 提供一个参数来指明fetch到的资源路径，然后返回一个promise对象。
3. promise对象用于一个异步操作的最终完成（或失败）及其结果值的表示。
4. `fetch(endpoint).then()`这个返回的对象里面有json()方法。

### replace: 
1. `str.replace(regexp|substr, new Substr|function)`： 该方法是第二个参数来匹配第一个参数。若第二个参数是函数，那么函数返回值将用来替换第一个参数。

### ES6中的扩展语法：
```js
//es5中的写法：
var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2); //[1, 2, 3, 3, 4, 5]

//es6中的写法
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
arr1.push(...arr2);
```