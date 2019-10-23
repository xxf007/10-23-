//判断语句
/*if(判断条件){
	执行内容
}else{

}*/

var num = "1a";
//再判断相等的时候两个等号会先尝试将两边转成类型一样的值
if(num == 1){
	console.log("num是1");
}else{

	console.log("num 不是1")
}
if(true){
	var color = "blue";
}
function color1(){
	var color2 = "red";
	return color2;
	var color2 = "blue";
}
console.log(color);
console.log(color1());
function add(){
	var sum = arguments[0] + arguments[1];
	console.log(arguments[1])
	console.log(arguments.length);
	return sum;
}
console.log(add(10,20));
console.log(add(10,20,30));
console.log(add(10));
console.log(sum);