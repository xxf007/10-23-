console.log("在控制台打印");
var n1 = 4;
var n2 = 1.66;
console.log(n1+n2);
var n3 = 0.1;
var n4 = 0.3;
console.log(n3+n4);
var str1 = "吴亦凡\n加拿大电鳗";
console.log(str1);
str2 = "喜羊羊\t";
str3 = "王'洋洋'";
console.log(`${str2}    是${str3}的老表`);
console.log(str2+"是\t"+str3+"的老表");
console.log("美\'羊羊\'"+str3);


var n = 666;
var s = "灰太狼";
console.log(typeof typeof n);
console.log(typeof s);
//属性
console.log(s.length);
//2种方法访问字符串
console.log(s.charAt(2));
console.log(s[1]);
//想找的字符串的位置
var people = "李荣浩成龙王大陆";
var big = people.indexOf("王大陆");
console.log(big);
console.log(people.indexOf("王勃"));
/*process.stdin.setEncoding('utf8');
//设置在控制台输入的字符的编码
process.stdin.on('readable',() =>{//让控制台等你输入
	var sannerin = process.stdin.read();
	if(sannerin !== null){//判断有没有输入
		process.stdout.write(`输入的数据是${sannerin}`);

	}
	var postion = people.indexOf(sannerin);
	console.log(postion);
	if(postion == -1){
		process.stdout.write(`对不起！没有这个人`);
	}else{
		process.stdout.write(`你要找的${sannerin}在${postion}`);
	}
})*/
//includes()方法接受一个字符串，判断是否存在
console.log(people.includes("成龙"));
//字符串的切片方法 slice() 第一个参数是开始下标(包含)第二个参数是结束下标(不包含)
console.log(people.slice(2,5).blink());
//substring 和 slice 一样
//如果省略第二个参数，那么返回的子串会一直到字符串的结尾
//substr 第一个参数是开始下标（包含），第二个参数是切的个数;
/* slice 开始下标比结束下标大  不打印 
    参数是负数，下标需要加上字符串长度；
*/
console.log(typeof people.slice(4,2));
console.log(people);
//substring 最开始会先比较2个下标，小的作为开始下标，大的作为结束下标；
//substring 下标为负数，第一步对比，小的为开始下标，大的结束下标，第二步，负数重置为0；


//substr 

//第一步:第一个参数如果为负数则加上字符串长度;
//第二步:第二个参数如果为负数，重置为0,将返回一个空字符串;
//如果第二个参数超出字符串长度，会按照字符串最大长度来算;
console.log(parseInt(3.6));
console.log(Math.round(3.66));
console.log(Number("1234blue"));
console.log(parseInt("1234blue"));
console.log("ab"<"ba");