/*
    Write an algorithm such that if an element in an MxN matrix is 0, its entires
    row and column are set to 0.

    Notes:

    1. Iterate through outer loop
    2. Iterate through inner loop
    3. If zero value is found, zero out given column
    4. If zero value is found, zero out entire row

    Example:

    1  2  3        1  0  3
    4  0  6   =>   0  0  0
    7  8  9        7  0  9

    As 0 was found in (1, 1):
    Add 0 to (1, 0)
    Add 0 to (1, 1)
    Add 0 to (1, 2)
    Then
    Add 0 to (0, 1)
    Add 0 to (1, 1)
    Add 0 to (2, 1)

    Improvements:

    Time Complexity - O(M.N)
    Space Complexity - O(M.N)

    Space Complexity can be improved if you store columns and rows separately as you
    only need to know which rows and columns to zero out, not the specific co-ords
*/

const zeroMatrix = (matrix) => {
    const foundZeroes = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            if (row[j] === 0) {
                foundZeroes.push([i, j]);
            }
        }
    }

    for (let zeroIndex = 0; zeroIndex < foundZeroes.length; zeroIndex++) {
        const i = foundZeroes[zeroIndex][0];
        const j = foundZeroes[zeroIndex][1];
        for (let x = 0; x < matrix.length; x++){
            matrix[x][j] = 0;
        }

        let row = matrix[i];

        for (let y = 0; y < row.length; y++) {
            matrix[i][y] = 0;
        }
    }
};

testAlgorithm = (matrix) => {
    console.log("BEFORE:")
    console.log(printMatrix(matrix));
    zeroMatrix(matrix);
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
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9]
    ]
);

testAlgorithm(
    [
        [1, 2, 3],
        [0, 5, 6],
        [7, 8, 9]
    ]
);

testAlgorithm(
    [
        [1, 0, 3],
        [0, 5, 6],
        [7, 8, 9]
    ]
);

testAlgorithm(
    [
        [1, 2, 3],
        [0, 0, 0],
        [7, 8, 9]
    ]
);

testAlgorithm(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
);

testAlgorithm(
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 0, 12],
        [13, 14, 15, 16]
    ]
);

testAlgorithm(
    [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 0, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ]
);