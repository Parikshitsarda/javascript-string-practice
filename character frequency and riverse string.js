// character frequency calculator //

let Str ="nefwofenownnfjownfo";

let count = {};
for(let char of Str ){
    if(count[char]){
        count[char]++
    }else{ (count[char]=1)}
    
}console.log(count);


//Write a JavaScript program to reverse a given string without using the built-in .reverse() method.//
let str = "javascript";
let reversestring ="";
for( let i= str.length-1;i>=0;i-- ){
    reversestring=reversestring+str[i]
}console.log(reversestring);
