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

const adjacentSpacesGraph = {};

function createMapHashGraph(gameBoard, start) {
  const queue = [start];
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

      adjacentSpacesGraph[currentSpaceString] = adjacentSpaces;
    }
  }

  console.log(adjacentSpacesGraph);
}

createMapHashGraph(gameBoard, [0,1]);

// findShortestPath(gameBoard, [0,1], [5,2]);