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

    Time Complexity - O(n) (or O(n^2) if you take the isSubstring into account)
    Space Complexity - O(1)

    The time complexity could be reduced if you concat s1 onto s1:

    - waterbottle + waterbottle = waterbottlewaterbottle
    - erbottlewat is a substring from indexes 3 to 13 inclusive
    - This will reduce iteration around s2's length
    - Time complexity now O(1) (or O(n) if you take isSubstring into account)
*/

const stringRotation = (s1, s2) => {
    if (s1.length != s2.length)
        return false;

    if (isSubstring(s1.concat(s1), s2))
        return true;

    return false;
};

const isSubstring = (s1, s2) => {
    return s1.includes(s2);
};

const testAlgorithm = (s1, s2) => {
    console.log(`Is "${s2}" a rotation of "${s1}"? ${stringRotation(s1, s2)}`);
}

testAlgorithm("waterbottle", "erbottlewat"); // TRUE
testAlgorithm("waterbottle", "erbottlewta"); // FALSE
testAlgorithm("waterbottle", "erbottlwat");  // FALSE