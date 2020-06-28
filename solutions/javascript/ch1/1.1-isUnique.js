/*
    Implement an algorithm to determine if a string has all unique characters.
    What if you cannot use additional data structures?

    Assumptions:

    - Case sensitivity matters. The character "H" is different from "h"
    - Empty string is not allowed

    Notes:

    - "Names" will return true
    - "Hello" will return false
    - "Cache" will return true
    - "!yes" will return true
    - "Great wisp no" will return false

    1. Iterate around length of string (outer loop)
    2. Store character in position "i" (default i=0)
    3. Within loop, iterate around length of string again (inner loop)
    4. Store character in position "j" (default j=0)
    5. If i=j, continue (skip to next value within inner loop)
    6. Get character at "i" index, character at "j" index and compare
    7. If match, return false
    8. If not match, go to next value within inner loop
    9. When inner loop is done, go to next value within outer loop
    10. When outer loop is done, no unique values have been found, therefore return true

    Other Considerations:

    - If String is empty, either console.error or consider returning true
    - If String is length of 1, return true

    Improvements:

    Time Complexity = Currently O(i^2)
    Space Complexity = O(1)

    We can improve this by using a Hash Table to get to O(i)

    1. Iterate around length of string as "i"
    2. Store value in JavaScript Object
    3. On each iteration, check to see if character already exists by looking at key
    4. If key exists, return false
    5. If key does not exist, go to next value within loop
    6. When loop is done, no unique values have been found, therefore return true

    Time Complexity = O(i)
    This will make Space Complexity increase to O(i) unfortunately

*/

const isUnique = (value = "") => {
    if (value === "" || typeof value !== "string")
        throw new Error("Value provided either contains an empty String or is not of type String");
    if (value.length === 1)
        return true;
    const charMap = {};
    for (let i = 0; i < value.length; i++) {
        const character = value.charAt(i);
        if (charMap[character] === null)
            return false;
        charMap[character] = null;
    }
    return true;
};

const testAlgorithm = (value) => {
    try {
        console.log(`Is string value "${value}" Unique? ${isUnique(value) ? "YES" : "NO"}`);
    } catch (e) {
        console.log(`Value "${value}" of type "${typeof value}" caused an error.\nError Message: ${e.message}`);
    }
};

testAlgorithm("Names");         // TRUE
testAlgorithm("Hello");         // FALSE
testAlgorithm("Cache");         // TRUE
testAlgorithm("!yes");          // TRUE
testAlgorithm("Great wisp no"); // FALSE
testAlgorithm("A");             // TRUE
testAlgorithm();                // ERROR
testAlgorithm("");              // ERROR
testAlgorithm(true);            // ERROR
testAlgorithm([]);              // ERROR
testAlgorithm(null);            // ERROR
testAlgorithm({});              // ERROR
