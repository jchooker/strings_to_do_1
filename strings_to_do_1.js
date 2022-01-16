// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, 
// but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

// function rmBlanks(str1) {
//     let strArr = str1.split(" ");
//     str1 = strArr.join("")

//     return str1;
// }

// let str1 = "If you built yourself a myth";
// str1 = rmBlanks(str1);
// console.log(str1);

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function 
// should return the number 1357924680.

// function getDigits(str1) {
//     let strOut = '';
//     for (let i in str1) {
//         if (!isNaN(str1[i])) {
//             strOut += str1[i];
//         }
//     }
//     return parseInt(strOut);
// }

// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

// function isLetter(char) {
//     return (/^[A-Za-z]+$/).test(char);
// }

// function acronym(str1) {
//     let strOut = "";
//     if (isLetter(str1[0])) {
//         strOut += str1[0];
//     }
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] === " " && ((i+1) < (str1.length - 1))) {
//             strOut = strOut + str1[i+1];
//         }
//     }

//     return strOut.toUpperCase();
// }

// let str1 = "Live from New York, it's Saturday Night!";
// console.log(acronym(str1));

// let str2 = " there's no free lunch - gotta pay yer way. ";
// console.log(acronym(str2));


// Zip Arrays into Map
// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, create an associative array (map) 
// containing keys of the first, and values of the second. For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], 
// return {"abc": 42, 3: "wassup", "yo": true}.

// function arrToMap(arr1, arr2) {
//     let arr3 = {};
//     for (let i = 0; i < arr1.length; i++) {
//         arr3[arr1[i]] = arr2[i];
//     }
//     return arr3;
// }

// let arr1 = ["abc", 3, "yo"];
// let arr2 = [42, "wassup", true];
// let arr3 = arrToMap(arr1, arr2);
// console.log(arr3);

// Invert Hash
// Associative arrays are also called hashes (we’ll learn why later). Build invertHash(assocArr) to convert hash keys to values, and values to keys. 

// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.

function invertArr(arr1) {
    let arr2 = {};
    for (let i in arr1) {
        arr2[arr1[i]] = i;
    }
    return arr2;
}

let arr1 = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
console.log(invertArr(arr1));