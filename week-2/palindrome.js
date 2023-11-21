function getTodaysDate() {
    // calling a function, returns a string
    // console.log(date);
}

let today = new Date();

// calling a constructor, can use other methods to extract info from returned value

let dd = today.getDate();
let mm = today.getMonth() + 1;

const yyyy = today.getFullYear();

console.log(mm, dd, yyyy);

if (dd < 10) {
    dd = `0${dd}`;
}


function getLength(string) {
    let len = string.length;
    console.log(`${str} ${str.length}`);

}

function reverse() {
   const stringLength = string.length;
   for (let i = 0; i < stringLength / 2; i++) {
    if (string[i] !== string[stringLength - 1 - i]) {
        return 'It is not a palindrome!'
    }
   }
   return 'It is a palindrome!';
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('richard'));

//if (str === reverse()) {
    // console.log("madam is a palindrome!"); // it's a palindrome
//} else {
    // console.log("madam is not a palindrome!");
// }
    // it's not a palindrome

let str = 'madam';
let splittedArray = name.split(""); // ["m", "a", "d", "a", "m"]
splittedArray.reverse(); // ["m", "a", "d", "a", "m"]
let reversedString = splittedArray.join(""); // madam

let isPalindrome = (inStr) => {
 for (let i=0; i<inStr.length; i+=1) {
     if (inStr[i] !== inStr[inStr.length - 1 - i]) {
    return false;
            }
    return true;
        }
    }
    
console.log(isPalindrome(str));


