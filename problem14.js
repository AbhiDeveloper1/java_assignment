var l=prompt("enter the length of an array and number after which you want left rotation");
var ele;
var arr=[];
var res=[];
var sec=[]
for(let i=0;i<l.split(" ")[0];i++){
  ele=prompt("enter array element");
  arr.push(ele);
}
for(let m=0;m<l.split(" ")[0];m++){
  if(m>=l.split(" ")[1]){
    res.push(arr[m])
  }
  else{
    sec.push(arr[m]);
  }
}
console.log(res.concat(sec))