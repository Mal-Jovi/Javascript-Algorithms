// JavaScript - isPalindrome - Jovi Sidhu

const checkPalindrome = string => {
    let reverseOfString = string.split("").reverse().join("");
    return reverseOfString == string ? "true" : "false";
};
