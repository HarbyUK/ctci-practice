/*
    Implement an algorithm to determine if a string has all unique characters.
    What if you cannot use additional data structures?

    Assumptions:

    - Case sensitivity matters. The character "H" is different from "h"

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
    
*/

const isUnique = (value) => {
    if (value === "" || typeof value !== "string")
        throw new Error("Value provided either contains an empty");
    if (value.length === 1)
        return true;
    for (let i = 0; i < value.length; i++) {
        const char1 = value.charAt(i);
        for (let j = 0; j < value.length; j++) {
            if (i === j)
                continue;
            
            const char2 = value.charAt(j);
            if (char1 === char2)
                return false;
        }
    }
    return true;
};

const testAlgorithm = (value) => {
    console.log(`Is string value "${value}" Unique? ${isUnique(value) ? "YES" : "NO"}`);
};

testAlgorithm("Names");         // TRUE
testAlgorithm("Hello");         // FALSE
testAlgorithm("Cache");         // TRUE
testAlgorithm("!yes");          // TRUE
testAlgorithm("Great wisp no"); // FALSE