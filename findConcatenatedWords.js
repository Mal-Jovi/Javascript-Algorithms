// JavaScript - substrings that are concatenations of words from list problem - Jovi Sidhu
// Given a string s, and a list of words called 'words' where each word is the same length, find
// all substrings in s that are concatenations of words in 'words' and give their starting indicies in s

function findConcatenatedWords (s, words) {
    string givenString = "barfoothefoobarman";
    const words = ["foo", "bar"];

    const givenStringLength = givenString.length;
    let potentialIndicies = new Array(givenStringLength);

    for (i = 0; i < givenStringLength; i++) {
        for (j = 0; j < words.length; j++) {
            if (givenString.charAt(i) == words[j][0]) {
                potentialIndicies[i] = 1;
            }
            else {
                potentialIndicies[i] = 0;
            }
        }
    }

    

};
