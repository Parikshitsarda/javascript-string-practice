//Remove duplicate characters from a string//

let str = "programming";

let newstr = "";
for(let char of str){
    if (newstr.includes(char)) {
        
    } else{newstr=newstr+char}
} console.log(newstr);

//Find the first non-repeating character//

let Str = "aabbcde";
let nonrepeatingchar = "";

for (let char of Str) {
    if (Str.split(char).length - 1 === 1) {
        nonrepeatingchar = char;
        break;
    }
}

console.log(nonrepeatingchar);