/*
    Given an image represented by an NxN matrix, where each pixel in the image is
    4 bytes, write a method to rotate the image by 90 degrees. Can you do this
    in place?

    Assumptions:

    - As NxN matrix, it must be a square image
    - Assume that 90 degree rotation is clockwise
    - As it needs to keep in place, no new matrix is created

    Notes:

    3x3 Matrix:

        [0, 1, 2],          [6, 3, 0],
        [3, 4, 5],   =>     [7, 4, 1],
        [6, 7, 8]           [8, 5, 2]

    (0, 0) => (0, 2) or (0, 0)     => (0, n)      Transpose: (0+0,      0+n)
    (0, 1) => (1, 2) or (0, n-1)   => (n-1, n)    Transpose: (0+n-1,    n-1+1)
    (0, 2) => (2, 2) or (0, n)     => (n, n)      Transpose: (0+n,      0)
    (1, 0) => (0, 1) or (n-1, 0)   => (0, n-1)    Transpose: (n-1-n+1,  0+n-1)
    (1, 1) => (1, 1) or (n-1, n-1) => (n-1, n-1)  Transpose: (n-1+0,    n-1+0)
    (1, 2) => (2, 1) or (n-1, n)   => (n, n-1)    Transpose: (n-1+1,    n-1)
    (2, 0) => (0, 0) or (n, 0)     => (0, 0)      Transpose: (n-n,      0)
    (2, 1) => (1, 0) or (n, n-1)   => (n-1, 0)    Transpose: (n-1,      n-1-n+1)
    (2, 2) => (2, 0) or (n, n)     => (n, 0)      Transpose: (n-0,      n-n)

    - When rotating, each corner replaces the other 4 times
    - Therefore all even matrix values replace 4 times
    - For odd matrix, the dead centre value never changes
    - The array needs to be iterated in a way that doesn't duplicate the work as may
      cause error

    1. Check that Outer array length equals inner array length
    2. Iterate through outer array to the halfway point (length/2)
    3. Iterate through inner array so that start value is current row and that it
       doesn't exceed halfway (init with col = row, col < length - row)
    4. As there are 4 guaranteed rotations, rotate each value, using temp variable
       to store temporary information during rotations

    Other Considerations:

    - If n = 1, then return result straight away
    - Ensure matrix is an array
    - Ensure each element of matrix is an array

    Improvements:

    Time Complexity - O(n/2 * n) => O(1/2 * n * n) => O(n^2)
    Space Complexity - O(1)

    - We can try and introduce a further loop that does all 4 rotations
    
*/

const rotateMatrix = (matrix) => {
    if (!Array.isArray(matrix))
        throw new Error("Matrix provided must be of type array");
    
    const half = matrix.length / 2;
    const bounds = matrix.length - 1;
    for (let i = 0; i < half; i++) {
        for (let j = i; j < bounds - i; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[bounds-i][j];
            matrix[bounds-i][j] = matrix[bounds-j][bounds-i];
            matrix[bounds-j][bounds-i] = matrix[i][bounds-j];
            matrix[i][bounds-j] = temp;
        }
    }
};

testAlgorithm = (matrix) => {
    console.log("BEFORE:")
    console.log(printMatrix(matrix));
    rotateMatrix(matrix);
    console.log("AFTER:")
    console.log(printMatrix(matrix));
};

printMatrix = (matrix) => {
    let matrixString = "[\n"
    for (let i = 0; i < matrix.length; i++) {
        matrixString += "  [ ";
        for (let j = 0; j < matrix.length; j++) {
            if (j !== 0)
                matrixString += ", "

            matrixString += matrix[i][j];
        }
        matrixString += " ]"

        if (i !== matrix.length -1)
            matrixString += ",";
            
        matrixString += "\n";
    }
    return matrixString + "]";
};

testAlgorithm(
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ]
);

testAlgorithm(
    [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15]
    ]
);

testAlgorithm(
    [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24]
    ]
);