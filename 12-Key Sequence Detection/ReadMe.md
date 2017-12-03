### Array.prototype.splice()
* The `splice()` method changes the contents of an array by removing existing elements and adding new elements.
* Remove 0 elements from index 2, and insert 'drum'
```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

//remove is [], no elements removed.
//myFish is ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
```
* Remove 1 element from index 3
```js
var removed = myFish.splice(3, 1);
```
* Remove 1 element from index 2, and insert 'trumpet'
```js
var removed = myFish.splice(2, 1, 'trumpet');
```
* 如果这里的第一个参数`start`是负数，则删除的位置从`length+start`开始，即数组的长度加上这个负数作为`start`的值，如果`deleteCount`为负数或者0则不执行删除的操作。