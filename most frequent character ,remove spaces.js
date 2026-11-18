//Find the most frequent character in a string//

let str = "javascript";
let secondmostfrequentchar = "";
let mostfrequentchar = "";

let count = {};
let maxCount = 0;
let secondmaxcount = 0;

for (let char of str) {
    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }

    if (count[char] > maxCount) {
        secondmaxcount = maxCount;
        secondmostfrequentchar = mostfrequentchar;

        maxCount = count[char];
        mostfrequentchar = char;

    } else if (count[char] > secondmaxcount) {
        secondmaxcount = count[char];
        secondmostfrequentchar = char;
    }
}

console.log(secondmostfrequentchar);