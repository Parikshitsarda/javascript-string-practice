//Check if a string is a palindrome//

let str = "madam";
let reverstring = "";
for(let i = str.length-1;i>=0;i--){
    reverstring = reverstring+str[i]}
    if(reverstring == str ){
        console.log("true");
    }else{console.log("false")}

    //Count vowels in a string//

   let Str = "I love learning JavaScript";
let words = 0;

for (let char of Str) {
    if (char === " ") {
        words++;
    }
}console.log(words+1);