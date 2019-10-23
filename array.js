var arr = [1,2,3,4,5];
for(var i = 0; i<arr.length;i++){
	arr[i] = "顺序" + arr[i];
	console.log(arr[i]);
}
console.log(arr);
console.log(i);

var str ="陈振华真的骚";
console.log(str[5]);
str[5] = "非常骚";
console.log(str);

arr.forEach(function(item,i,array){
	arr[i] = "foreach" + arr[i];
})
console.log(arr);

//这个集合里所有数是否都是偶数
var numArr = [2,6,8,9];
var result = numArr.every(function(item,i,array){
	if(item % 2 == 0 ){
		return true;
	}else{
		return false;
	}
})
console.log(result);

//这个集合里是否有偶数
var result2 = numArr.some(function(num,i,array){
	if(num % 2 == 0 ){
		return true;
	}else{
		return false;
	}
})
console.log(result2);

//map可以很方便的对数组项进行修改返回一个数组
var maparr = arr.map(function(item,index,array){
	return "白痴-" + item;
})
//方法总体执行五次push到一个新数组
console.log(maparr);

//filter 过滤，删除数组里你想删的东西
var arrNum = [1,2,3,4,5,6,7,8,9,10]
var result3 = arrNum.filter(function(num,index){
	if(num % 2 !=0){		
		return false;
	}else{
		return true;
	}
})
console.log(result3);
console.log(arrNum[20]);
console.log(arrNum.length);
