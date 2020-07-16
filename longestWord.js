// Longest Word - Jovi Sidhu

const longestWord = string => {
    let words = string.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
};

