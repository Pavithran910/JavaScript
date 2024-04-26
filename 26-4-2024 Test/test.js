console.log("Question 1")
var a=20
var b=20
function eval(a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}
eval(a,b)

console.log("Question 2")
var arr=[1,2,3,4]
var empty=[]
for(let i=0;i<=arr.length;i++){
    if (arr[i] % 2 === 0) { 
        empty.push(arr[i]);
    }
}
console.log(empty); 


console.log("Question 3")
var ar=[1,2,3,4]
var multi=[]
for(let i=0;i<ar.length;i++){
    multi.push(ar[i] * 2);
}
console.log(multi);

console.log("Question 4")

var str = "bala";
var result = "My name is: "+myFunction(str)
function myFunction(str){
    return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase()
}
console.log(result); 
