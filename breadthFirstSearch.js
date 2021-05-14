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
  const queue = [start];
  const alreadyChecked = [];

  while(queue.length) {
    const currentSpace = queue.shift();
    const roadSpaces = [];

    const alreadyCheckedString = JSON.stringify(alreadyChecked);
    const currentSpaceString = JSON.stringify(currentSpace);

    if(!alreadyCheckedString.includes(currentSpaceString)) {
      if(currentSpace[0] - 1 >= 0) {
        console.log('space above being checked...');
        const topValue = gameBoard[currentSpace[0] - 1][currentSpace[1]];
        const topSpace = [currentSpace[0] - 1, currentSpace[1]]

        if(topValue === 1) {
          roadSpaces.push([currentSpace[0] - 1, currentSpace[1]]);
        }

        if(JSON.stringify(topSpace) === JSON.stringify(end)) {
          console.log('final space found!', topSpace);
          return;
        }
      } 
      
      if(currentSpace[1] + 1 < gameBoard.length) {
        console.log('space to the right being checked...');
        const rightValue = gameBoard[currentSpace[0]][currentSpace[1] + 1];
        const rightSpace = [currentSpace[0], currentSpace[1] + 1];

        if(rightValue === 1) {
          roadSpaces.push([currentSpace[0], currentSpace[1] + 1]);
        }

        if(JSON.stringify(rightSpace) === JSON.stringify(end)) {
          console.log('final space found!', rightSpace);
          return;
        }
      }

      if(currentSpace[0] + 1 < gameBoard.length) {
        console.log('space below being checked...');
        const bottomValue = gameBoard[currentSpace[0] + 1][currentSpace[1]];
        const bottomSpace = [currentSpace[0] + 1, currentSpace[1]];

        if(bottomValue === 1) {
          roadSpaces.push([currentSpace[0] + 1, currentSpace[1]]);
        }

        if(JSON.stringify(bottomSpace) === JSON.stringify(end)) {
          console.log('final space found!', bottomSpace);
          return;
        }
      }

      if(currentSpace[1] - 1 >= 0) {
        console.log('space to the left being checked...');
        const leftValue = gameBoard[currentSpace[0]][currentSpace[1] - 1];
        const leftSpace = [currentSpace[0], currentSpace[1] - 1];

        if(leftValue === 1){
          roadSpaces.push([currentSpace[0], currentSpace[1] - 1]);
        }

        if(JSON.stringify(leftSpace) === JSON.stringify(end)) {
          console.log('final space found!', leftSpace);
          return;
        }
      }

      const queueString = JSON.stringify(queue);

      roadSpaces.forEach(space => {
        const spaceString = JSON.stringify(space);
        if (!queueString.includes(spaceString)) {
          queue.push(space);
        }
      });

      alreadyChecked.push(currentSpace);
    }
  }
}

findShortestPath(gameBoard, [0,1], [5,2]);

// TODO: Find the sho