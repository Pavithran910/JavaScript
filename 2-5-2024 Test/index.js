console.log("Question 1")
var sum=[1,2,3,4,5]
function sums(ar){
    var num=0;
    for(i=0;i<sum.length;i++){
        num+=ar[i];
    }return num;    
}console.log(sums(sum)); 

console.log("Question 2")
var uniq=[1,2,3,3,4,5,5]
function uni(){
    var uniqueElements=[]
    for(var i=0;i<uniq.length-1;i++){
        if(uniq[i]!==uniq[i+1]){
            uniqueElements.push(uniq[i])
        }
    }
    uniqueElements.push(uniq[uniq.length - 1]);
    return uniqueElements
}
console.log(uni())


console.log("Question 3")
var arr1=[1,2,3]
var arr2=[4,5]
var ct=arr1.concat(arr2)
console.log(ct)


console.log("Question 4")
var intersection1=[1,2,3,4]
var intersection2=[3,4,5,6]
function intersection(){
    var res=[]
    for(var i=0;i<intersection1.length;i++){
        for(var j=0;j<intersection2.length;j++){
            if (intersection1[i] === intersection2[j]) {
                res.push(intersection1[i]);
            }
        }
    }return res;
}
console.log(intersection())

console.log("Question 5")
var str1 = "madam"; 
var str2 = "peace";
let stringBuilder = [];
stringBuilder.push(str1);
stringBuilder.push(str2);

function palindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(palindrome(str1));
console.log(palindrome(str2)); 


