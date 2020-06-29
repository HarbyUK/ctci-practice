/*
    There are three types of edits that can be performed on strings: insert a character,
    remove a character, or replace a character. Given two strings, write a function to check
    if they are one edit (or zero edits) away

    Example:

    pale, ple -> true
    pales, Pale -> true
    pale, bale -> true
    pale, bake -> false

    Assumptions:

    - Zero edits mean both string values are equal
    - All non-alpha characters are stripped out
    - Case is insensitive, therefore "H" should be considered "h"

    Notes:

    - We can say test for equal (zero away) when first value equals second
    - We can say test for replace when first value's length matches second
    - We can say test for remove when first value's length is greater than second
    - We can say test for insert when first value's length is less than second

    1. Make string lowercase and remove all special characters/numbers
    2. If first value equals second value, it's zero away, therefore return true
    3. Else If first value's length matches second value's length, test for replace
    3a. Iterate around first string. Test to see if each character matches
    3b. If character does not match, increment "up" counter by 1
    3c. Continue to iterate. If up counter reaches 2 or greater, return false
    3d. If counter stays at 1, then is 1 away and therefore return true
    4. Else If first value's length is greater than second value's length, test for remove
    4a. Iterate around first string, removing the given index's character and comparing
    4b. If there is a match, return true
    4c. If there is no match and all characters have been iterated through, return false
    5. Else If first value's length is less than second value's length, test for insert
    5a. You could technically do this by doing similar to testing for remove, only test
        for remove on the second value against the first this time.
    5b. Iterate around second string, removing the given index's character and comparing
    5c. If there is a match, return true
    5d. If there is no match and all characters have been iterated through, return false

    Other Considerations:

    - Ensure non String type throws an error

    Improvements:

    Time Complexity - O(i)
    Space Complexity - O(1)

*/

const oneAway = (value1, value2) => {
    validateParameters(value1, value2);
    value1 = sanitizeValue(value1);
    value2 = sanitizeValue(value2);

    if (value1 === value2)
        return true;
    
    if (value1.length === value2.length) {
        let isOneAway = false;
        for (let i = 0; i < value1.length; i++) {
            if (value1.charAt(i) !== value2.charAt(i))
                if (isOneAway)
                    return false;
                else
                    isOneAway = true;
        }
        return true;
    }

    if (value1.length > value2.length) {
        for (let i = 0; i < value1.length; i++) {
            const removedValue = value1.slice(0, i) + value1.slice(i + 1);
            if (removedValue === value2)
                return true;
        }
        return false;
    }

    if (value1.length < value2.length) {
        for (let i = 0; i < value2.length; i++) {
            const removedValue = value2.slice(0, i) + value2.slice(i + 1);
            if (removedValue === value1)
                return true;
        }
        return false;
    }
    return false;
};

const validateParameters = (value1, value2) => {
    if (typeof value1 !== "string" || typeof value2 !== "string")
        throw new Error("Parameter provided is not of type string");
};

const sanitizeValue = (value) => {
    return value.toLowerCase().replace(/[^a-z]+/g, "");
};

const testAlgorithm = (value1, value2) => {
    try {
        console.log(`Is "${value1}" one away from "${value2}"? ${oneAway(value1, value2)}`);
    } catch(e) {
        console.error(e.message);
    }
};

testAlgorithm("pale", "ple");       // true
testAlgorithm("pales", "pale");     // true
testAlgorithm("pale", "bale");      // true
testAlgorithm("pale", "bake");      // false
testAlgorithm("ple", "pale");       // true
testAlgorithm("pale", "pales");     // true
testAlgorithm("bale", "pale");      // true
testAlgorithm("bake", "pale");      // true
testAlgorithm("", "");              // true
testAlgorithm("pa le", "ple ");     // true
testAlgorithm("p!a$l%e", "*p@l#e")  // true
testAlgorithm(null, null)           // Error
testAlgorithm({}, {})               // Error
testAlgorithm([], [])               // Error
testAlgorithm(5, 5)                 // Error
testAlgorithm()                     // Error