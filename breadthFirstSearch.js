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

function createMapHashGraph(gameBoard, startSpace) {
  const hashGraph = {};
  const queue = [startSpace];
  const alreadyChecked = [];

  while(queue.length) {
    const currentSpace = queue.shift();
    const adjacentSpaces = [];

    const alreadyCheckedString = JSON.stringify(alreadyChecked);
    const currentSpaceString = JSON.stringify(currentSpace);

    if(!alreadyCheckedString.includes(currentSpaceString)) {
      if(currentSpace[0] - 1 >= 0) {
        // console.log('space above being checked...');
        const value = gameBoard[currentSpace[0] - 1][currentSpace[1]];

        if(value === 1 || value === 2) {
          adjacentSpaces.push([currentSpace[0] - 1, currentSpace[1]]);
        }
      } 
      
      if(currentSpace[1] + 1 < gameBoard.length) {
        // console.log('space to the right being checked...');
        const value = gameBoard[currentSpace[0]][currentSpace[1] + 1];

        if(value === 1 || value === 2) {
          adjacentSpaces.push([currentSpace[0], currentSpace[1] + 1]);
        }
      }

      if(currentSpace[0] + 1 < gameBoard.length) {
        // console.log('space below being checked...');
        const value = gameBoard[currentSpace[0] + 1][currentSpace[1]];

        if(value === 1 || value === 2) {
          adjacentSpaces.push([currentSpace[0] + 1, currentSpace[1]]);
        }
      }

      if(currentSpace[1] - 1 >= 0) {
        // console.log('space to the left being checked...');
        const value = gameBoard[currentSpace[0]][currentSpace[1] - 1];

        if(value === 1 || value === 2){
          adjacentSpaces.push([currentSpace[0], currentSpace[1] - 1]);
        }
      }

      const queueString = JSON.stringify(queue);

      adjacentSpaces.forEach(space => {
        const spaceString = JSON.stringify(space);
        if (!queueString.includes(spaceString)) {
          queue.push(space);
        }
      });

      alreadyChecked.push(currentSpace);

      hashGraph[currentSpaceString] = adjacentSpaces;
    }
  }

  return hashGraph;
}

function findShortestPath(gameBoard, startSpace, endSpace) {
  const gameBoardHashGraph = createMapHashGraph(gameBoard, startSpace);
  console.log(gameBoardHashGraph);

  const queue = [startSpace];
  const alreadyChecked = [];
  const endSpaceString = JSON.stringify(endSpace);

  // while(queue) {
    const currentSpace = queue.shift();
    const currentSpaceString = JSON.stringify(currentSpace);
    const alreadyCheckedString = JSON.stringify(alreadyChecked);

    if(!alreadyCheckedString.includes(currentSpaceString)) {
      if(currentSpaceString === endSpaceString) {
        console.log('made it out alive!');
        return;
      }

      queue.push(gameBoardHashGraph[currentSpace]);
      alreadyChecked.push(currentSpace);
    }
  // }
}

findShortestPath(gameBoard, [0,1], [5,2]);