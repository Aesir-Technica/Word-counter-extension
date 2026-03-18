'use strict';

function countWords(text) {
    return text.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;
}

// Example usage:
const text = "This is an example text with several words.";
console.log(`Word count: ${countWords(text)}`);