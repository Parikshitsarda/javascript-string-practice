//Find the longest word in a sentence//
 let str = "I love learning JavaScript programming";
 let longword = "";
 for(let word of str.split(" ") ){
    if(word.length>longword.length){
        longword=word;
    }
 }console.log(longword);


 //Capitalize the first letter of every word//

 let Str = "i love learning javaScript programming";
 let newstr = "";
 for(let word of Str.split(" ")){
    
    newstr =newstr + word[0].toLocaleUpperCase()+word.slice(1)+" ";
    
 }console.log(newstr);