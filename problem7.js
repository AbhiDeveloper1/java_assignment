var i=prompt("Enter the term of the series");
if(i<0){
  console.log('Error')
}
else if(i== 0){
  console.log(0)
}
else{
console.log(Math.pow(i,2));
}