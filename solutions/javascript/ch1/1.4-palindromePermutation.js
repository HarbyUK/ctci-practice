/*
    Given a string, write a function to check if it is a permutation of a palindrome.
    A palindrome is a word or phrase that is the same forwards and backwards.
    A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

    Example:

    Input - Tact Coa
    Output - True (permutations: "taco cat", "atco cta", etc)

    Assumptions:

    - Space does not count
    - Case is insensitive
    - Special Characters do not count
    - Numbers do not count (?)

    Notes:

    - Even number of alpha characters = n/2 palindromes
    - Odd number of alpha characters = (n-1)/2 palindromes

    abcabc = TRUE because palindrome = abccba, bcaacb or cbaabc
    abcdabc = TRUE because palindrome = abcdcba, bcadacb or cbadabc
    abcdeabc = FALSE because no palindrome = abc[de]cba, bca[de]acb or cba[de]abc

    1. Make string lower case
    2. Iterate around string value (i)
    3. Use Hash table to store character as key, and count of instances as value
    4. Assess string value length modulo 2 (value % 2). If 0, then even. If not 0, then odd
    5. Iterate around map keys
    6. If even, every key's value modulo 2 should be 0.
    6a. If 0, then return true.
    6b. If not 0, then return false
    7. If odd, all but one key's value modulo 2 should be 0
    7a. If only one key's value modulo 2 is not 0, return true
    7b. If more than one instance of key's value modulo 2 is not 0, return false

    value = abcdabc, value length = 7
    
    i = 0, char at i = a
    map["a"] = 1
    i = 1, char at i = b
    map["b"] = 1
    i = 2, char at i = c
    map["c"] = 1
    i = 3, char at i = d
    map["d"] = 1
    i = 4, char at i = a
    map["a"] = 2
    i = 5, char at i = b
    map["b"] = 2
    i = 6, char at i = c
    map["c"] = 2
    is value length % 2 = 0? FALSE
    map["a"] % 2 = 0? TRUE
    map["b"] % 2 = 0? TRUE
    map["c"] % 2 = 0? TRUE
    map["d"] % 2 = 0? FALSE
    
    As value length is odd number and only 1 single character instance (map["d"]),
    Return TRUE

    Improvements:

    Time Complexity = O(i)
    Space Complexity = O(i)

*/

const palindromePermutation = (value = "") => {
    value = value.toLowerCase().replace(/[^a-z]+/g, "");

    let valueMap = {};
    for (let i = 0; i < value.length; i++) {
        if (valueMap[value.charAt(i)] === undefined)
            valueMap[value.charAt(i)] = 1;
        else
            valueMap[value.charAt(i)] = valueMap[value.charAt(i)] + 1;
    }

    const isEven = value.length % 2 === 0;
    let oddExists = false;
    for (const [k, v] of Object.entries(valueMap)) {
        if (v % 2 !== 0) {
            if (isEven || oddExists)
                return false;
            
            oddExists = true;
        }
    }
    return true;
};

const testAlgorithm = (value) => {
    console.log(`Does "${value}" permute to a palindrome? ${palindromePermutation(value)}`);
};

testAlgorithm("Tact Coa");
testAlgorithm("abcabc");
testAlgorithm("abcdabc");
testAlgorithm("abcdeabc");
testAlgorithm("abcabcddd");
testAlgorithm("!#$abcabc");
testAlgorithm("!$ab#cab&c");
testAlgorithm("12ab345cab6789c");