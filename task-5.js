'use strict';

const checkForSpam = function(message) {
    const prohibitedWord1 = 'spam';
    const prohibitedWord2 = 'sale';
    for(const word of message) {
        if(message.toLowerCase().includes(prohibitedWord1 && prohibitedWord2)) {
            return true;
        }
    }
    return false;
  };
  

console.log(checkForSpam('Latest technology news')); // false
  
console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
console.log(checkForSpam('Get best sale offers now!')); // true
  
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true