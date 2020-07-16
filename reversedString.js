// JavaScript - Reverse String - Jovi Sidhu

const reverseString = string => {
    let startString = string;

    /*
    split seperates the given string by character, reverse reverses the order of elements in an array 
    which in this case is the order characters in the "split" array, and join then combines the elements 
    of the reveresd array back into one string which is then returned
    */
    let reversedString = string.split("").reverse().join("");

    return reversedString;
};
