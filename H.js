console.log("Helloworld!");
function sayHello(){
	console.log("HelloXF");
}
sayHello();
function sayHelloname(name){
	console.log("Hello"+ name);
}
sayHelloname("徐锋");
 var a;    //该变量在函数外声明，作用于整个脚本代码;
 function send()
 {
      a = "绿叶学习网";
      var b = "JavaScript入门教程"; //该变量在函数体内声明，只作用于该函数体
      console.log(a+b);
 }
send();
console.log(a);
console.log('acdd'<'bc');
var c = 3.1415;
console.log(parseInt(c)+2);
console.log(c.toString()+1111);
 var now = new Date();    //获取当天系统日期
 var day = now.getDay();   //获取当天是星期几
 var week;
    switch(day)
{
            case 1:
                week = "星期一"; break;
            case 2:
                week = "星期二"; break;
            case 3:
                week = "星期三"; break;
            case 4:
                week = "星期四"; break;
            case 5:
                week = "星期五"; break;
            case 6:
                week = "星期六"; break;
            default:
                week = "星期日";
   }
console.log("今天是"+week);    //输出今天是星期几
var myfunction = function(){
	console.log('匿名函数？');
}
function myfunction2(){
	console.log("函数？")
}
myfunction();
myfunction2();
console.log(b);