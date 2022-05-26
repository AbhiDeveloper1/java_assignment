// var side=prompt("Enter Side of an equilateral triangle:");
// var area=(Math.sqrt(3)/4)*Math.pow(side,2);
// console.log(parseFloat(area).toFixed(2))
// 4 var m=prompt("enter the month number");
// if(m == 1 || m==3 || m== 5 || m== 7 || m==8 || m==10 ||m==12){
//   console.log(31)
// }
// else if(m==4 || m==6 || m== 9 ||m==11){
//   console.log(30)
// }
//   else if(m==2){
//     console.log(28)
//   }
// else {
//   console.log("Error")
// }
//  var cel=prompt("enter the temperature in celsius");
// var far= (cel*1.8)+32;
// console.log(`temperature:${far}Farenheit`)  
// var i=prompt("enter integer");
// var sum=0;
// for(let j=1;j<=i;j++){
//   sum=sum+j;
// }
// console.log(sum)
// 1,3,5,7,9,11,13,15,17,
//   d=2;
// a=1
// a=a1+(n-1)d;
// a=1+(6-1)2=11

var i=prompt("Enter the term of the series");
if(i<0){
  console.log('Error')
}
else if(i== 0){
  console.log(0)
}
else{
console.log(1+(i-1)*2);
}
