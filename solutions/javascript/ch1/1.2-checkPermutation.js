/*
    Given two strings, write a method to decide if one is a permutation of the other

    Assumptions:

    - Case sensitivity does matter. The character "H" is different from "h
    - White space and symbols are considered part of the permutation. "Hello " and "He llo" would return true

    Notes:

    "abc" is found in "abc"
    "abc" is found in "bca"
    "abc" is found in "cba"
    "abc" is not found in "xbc"
    "abc" is not found in "xyz"

    You can sort the solution and then compare (Went with this option)
    OR
    You can check the count of both strings match then validate characters all matchup

    Improvements:

    Time Complexity: O(n log n)
*/

const checkPermutation = (value1, value2) => {
    if (value1.length !== value2.length)
        return false;

    if (value1 === value2)
        return true;

    if (sort(value1) === sort(value2))
        return true;

    return false;
};

const sort = (value) => {
    if (value.length === 1)
        return value;
    if (value.length === 2)
        return value.charCodeAt(0) > value.charCodeAt(1) ? value.charAt(1) + value.charAt(0) : value.charAt(0) + value.charAt(1);

    const middle = parseInt(value.length / 2, 10);
    return merge(sort(value.slice(0, middle)), sort(value.slice(middle)));
};

const merge = (slicedValue1, slicedValue2) => {
    let value = "";
    let index1 = 0;
    let index2 = 0;

    while (index1 < slicedValue1.length || index2 < slicedValue2.length) {
        if (index1 >= slicedValue1.length || slicedValue1.charCodeAt(index1) > slicedValue2.charCodeAt(index2)) {
            value += slicedValue2.charAt(index2);
            index2++;
        } else {
            value += slicedValue1.charAt(index1);
            index1++;
        }
    }

    return value;
};

const testAlgorithm = (value1, value2) => {
    console.log(`Value 1 = "${value1}", Value 2 = "${value2}". Permutation exists? ${checkPermutation(value1, value2) ? "YES" : "NO"}`);
};

testAlgorithm("abc", "abc");
testAlgorithm("abc", "bca");
testAlgorithm("abc", "cba");
testAlgorithm("abc", "xbc");
testAlgorithm("abc", "xyz");
testAlgorithm("Hello ", "He llo");
testAlgorithm("!#$%", "$!%#");
testAlgorithm("Hello ", "Hello");
testAlgorithm("giant hornets", "another sting");