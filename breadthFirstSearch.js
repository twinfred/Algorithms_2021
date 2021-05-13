// gameBoard Rules
// 2 is start and end point
// 1 is the road
// 0 is the wall
// We can move to up, down, left, and right if the next node is 1.

// GOAL
// Find the shortest path to get from start to end

// CHALLENGES
// #1 -> Ouput Length: 8
// #2 -> Output Path: [[0,1],[1,1],[2,1],[2,0],[3,0],[4,0],[4,1],[4,2],[5,2]];

const gameBoard = [
  [0,2,0,0,0,0],
  [0,1,1,0,0,0], 
  [1,1,1,1,1,0], 
  [1,0,0,0,1,0], 
  [1,1,1,1,1,0], 
  [0,0,2,0,0,0],
];

function findShortestPath(gameBoard, start, end) {
  // [1,1] -> [0,1] = move up -- first number (gameBoard[-1, x]) gets smaller
  // [1,0] -> [1,1] = move right -- second number (gameBoard[y, +1]) gets bigger
  // [0,1] -> [1,1] = move down -- first number (gameBoard[+1, x]) gets bigger
  // [1,1] -> [1,0] = move right -- second number (gameBoard[y, -1]) gets smaller
}

findUserById(gameBoard, [0,1], [5,2]);