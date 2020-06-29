/*
    Assume you have a method isSubstring which checks if one word is a substring of another.
    Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
    call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat")

    Notes:

    1. Check to see if s1's length is equal to s2's length
    2. If false, return false
    3. If true, we need to see if s2 is rotated.
    4. We can try this by slicing a character from the end of s2 and placing at the start
    5. If match, return true
    6. If iterated length of word, then return false

    Improvements:

    Time Complexity - O(n)
    Space Complexity - O(1)
*/

const stringRotation = (s1, s2) => {
    if (s1.length != s2.length)
        return false;

    for (let i = 1; i <= s2.length; i++) {
        const rotateAttempt = s2.slice(-1 * i) + s2.slice(0, -1 * i);

        if (isSubstring(s1, rotateAttempt))
            return true;
    }
    return false;
};

const isSubstring = (s1, s2) => {
    return s1.includes(s2);
};

const testAlgorithm = (s1, s2) => {
    console.log(`Is "${s2}" a rotation of "${s1}"? ${stringRotation(s1, s2)}`);
}

testAlgorithm("waterbottle", "erbottlewat");
testAlgorithm("waterbottle", "erbottlewta");
testAlgorithm("waterbottle", "erbottlwat");