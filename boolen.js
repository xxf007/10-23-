//undefined 当一个变量找不到的时候，变量只声明了但没有赋值
var arr = [123,"字符串",[1,2,3],true];
console.log(arr);
console.log(typeof arr);
console.log(arr.toString());
console.log(arr.join());
console.log(arr.length);
arr.push("高圆圆","赵又廷");
console.log(arr.toString());
console.log(typeof arr.toString());
arr.pop();//删除数组的最后一项
console.log(arr.join());
arr.unshift("高圆圆");// 向数组开始添加一个元素
arr.shift();
//splice 向数组的某个位置添加内容 |删除数组某个位置
arr.splice(2,0,"666");
arr.splice(1,1);
console.log(arr);
arr.splice(2,2,"777","888");
console.log(arr);
var test = null;
console.log(typeof test);
var test1;
console.log(test1);
var myStr = "牛逼";
function mynp(){
	myStr = "我牛逼";
	return myStr;
}

console.log(mynp());
console.log(myStr);