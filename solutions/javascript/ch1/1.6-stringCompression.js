/*
    Implement a method to perform basic string compression using the counts of
    repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
    If the "compressed" string would not become smaller than the original string, your
    method should return the original string. You can assume the string has only
    uppercase and lowercase letters (a-z)

    Assumptions:
    
    - Parameters passed will always be either A-Z or a-z
    - AAaaa would be A2a3 and not a5
    - If compressed string length matches uncompressed, use uncompressed

    Notes:

    "aabcccccaaa" => "a2b1c5a3"
    "aabccaa" => "a2b1c2a2" => "aabccaa" as length is smaller
    "aabccaaa" => "a2b1c2a3" => "aabccaaa" as same length

    1. Iterate around string value
    2. Compare current character with previous character
    3. If match, increment counter value by 1
    4. If no match, add string to array with count
    5. Store current value as previous value
    6. Repeat until fully iterated
    7. Compare length of original string with compressed string
    8. If length of compressed string less than uncompressed, return compressed string
    9. If length of compressed string is greater than or equal to uncompressed, return
       uncompressed string

    Other Considerations:

    - Throw error if not string

*/

const stringCompression = (value) => {
    if (typeof value !== "string")
        throw new Error("Parameter is not of string type");

    let count = 1;
    let prevChar = null;
    const compressedArray = []

    for (let i = 0; i < value.length; i++) {
        const currentChar = value.charAt(i);
        if (currentChar !== prevChar) {
            if (prevChar !== null) {
                compressedArray.push(prevChar + count);
                count = 1;
            }
            prevChar = currentChar;
        } else {
            count++;
        }
    }
    compressedArray.push(prevChar + count);
    const compressedValue = compressedArray.join("");
    if (compressedValue.length < value.length)
        return compressedValue;
    return value;
};

const testAlgorithm = (value) => {
    try {
        console.log(`"${value}" has been compressed to "${stringCompression(value)}"`);
    } catch (e) {
        console.error(e.message);
    }
};

testAlgorithm("aabcccccaaa");           // a2b1c5a3
testAlgorithm("aabccaa");               // aabccaa
testAlgorithm("aabccaaa");              // aabccaaa
testAlgorithm("aaAAAbBccCCCCAAaaa");    // a2A3b1B1c2C4A2a3
testAlgorithm();                        // ERROR
testAlgorithm(1);                       // ERROR
testAlgorithm({});                      // ERROR
testAlgorithm([]);                      // ERROR
testAlgorithm(null);                    // ERROR
testAlgorithm(true);                    // ERROR