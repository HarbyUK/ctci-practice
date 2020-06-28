/*
    Write a method to replace all spaces in a string with '%20'. You may assume that the string has
    sufficient space at the end to hold the additional characters, and that you are given the length
    of the string.

    Example:

    Input - "Mr John Smith", 13
    Output - "Mr%John%Smith"

    Assumptions:

    Spaces at the start and end count. " Mr John Smith " would output "%20Mr%20John%20Smith%20"

    Notes:

    1. Iterate through string
    2. Check for space character
    3. If false continue
    4. If true then replace space character with %20

    Other Considerations:

    - If string length does not match length provided as parameter throw error
    - Using String.prototype.replace will cause storage to increase as much as there are spaces at O(n)
      I think if I slice the string instead, store in an array and then Array.prototype.join, I can keep
      both time and space complexity optimal

    Improvements:

    Time Complexity - O(i)
    Space Complexity - O(i)
    
*/

const urlify = (url, length) => {
    if (url.length != length)
        throw new Error("Mismatch in string length and parameter length");
    
    const encodedUrl = [];
    for (let i = 0; i < url.length; i++) {
        if (url.charAt(i) === " ")
            encodedUrl.push("%20");
        else
            encodedUrl.push(url.charAt(i));
    }

    return encodedUrl.join("");
};

const testAlgorithm = (url, length) => {
    try {
        console.log(`Converted "${url}" to "${urlify(url, length)}"`);
    } catch (e) {
        console.error(e.message);
    }
}

testAlgorithm("Mr John Smith", 13);     // Mr%20John%Smith
testAlgorithm(" Mr John Smith ", 15);   // %20Mr%20John%20Smith%20
testAlgorithm("", 0)                    // EMPTY STRING
testAlgorithm("Mr John Smith", 12);     // ERROR