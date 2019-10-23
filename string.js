var str1 = "徐锋"
var str2 = "谢星发"
//大小写敏感
//拼接字符串
var strsub = str1 + str2;
console.log(strsub);

//模板字符串
var strsub2 = `${str1}${str2}`;
console.log(strsub2);
//方法
var strsub3 = str1.concat(str2,"吴彦祖");
console.log(strsub3);

console.log(str1.startsWith("徐"));
console.log(str1.includes("徐"));

var str3 = "  Hello 雷锋   "
console.log(str3);
console.log(str3.trim());
console.log(str3.toUpperCase());

/*
   字符串的访问：charAt()    [];
   查找字符串中字符的位置: indexOf()  includes()字符串是否以子字符串开头;
   字符串捕捉: slice() substring() substr();
   字符串的拼接:concat();

*/
