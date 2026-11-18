//Count words in a sentence//

let str = "I love learning JavaScript";
let wordsinstr = 0;

for (let word of str.split(" ")) {
    wordsinstr++;
}

console.log(wordsinstr);

  //Check whether two strings are anagrams//
let Str1 = "listen";
let Str2 = "silent";
 for (let char of Str1) {

        if (Str2.includes(char)) {

            let count1 = Str1.split(char).length - 1;
            let count2 = Str2.split(char).length - 1;

            if (count1 == count2) {
                console.log(true);
            } else {
                console.log(false);
            }

        } else {
            console.log(false);
        }
    }

 
   
