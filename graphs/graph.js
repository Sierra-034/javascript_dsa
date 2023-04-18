
/*

    2 - 0
   / \
  1 - 3

*/

// Edge List
const edgeList = [
    [0, 2],
    [1, 2],
    [1, 3],
    [2, 3],
];

// Adjacent List
const adjacentList = [
    [2],
    [2, 3],
    [0, 1, 3],
    [1, 2],
];

const adjacentListObj = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2],
};

// Adjacent Matrix
const adjacentMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
];

const adjacentMatrixObj = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0],
};
