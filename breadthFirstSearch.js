// gameBoard Rules
// 2 is start and end point
// 1 is the road
// 0 is the wall
// We can move to up, down, left, and right if the next node is 1.
// The gameBoard is NxN in size (width === height // rows === columns)

// GOALS
// Find the shortest path to get from start to end
// #1 -> Ouput Length: 8
// #2 -> Output Path: [[0,1],[1,1],[2,1],[2,0],[3,0],[4,0],[4,1],[4,2],[5,2]]

const gameBoard = [
  [0,2,0,0,0,0],
  [0,1,1,0,0,0], 
  [1,1,1,1,1,0], 
  [1,0,0,0,1,0], 
  [1,1,1,1,1,0], 
  [0,0,2,0,0,0],
];

class GameBoardMap {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getData() {
    let length = 0;
    let path = [];

    let runner = this.end;

    while(runner.parent) {
      length++;
      path.unshift(runner.location);
      runner = runner.parent;
    }

    path.unshift(runner.location);

    return {
      length,
      path
    };
  }
}

class MapNode {
  constructor(location, top, right, bottom, left, parent) {
    this.location = location
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.parent = parent;
  }
}

function findShortestPath(gameBoard, startSpace, endSpace) {
  const alreadyChecked = [];
  const queue = [startSpace];
  const parentMap = {};

  const gameBoardMap = new GameBoardMap();

  while (queue.length) {
    const currentSpace = queue.shift();
    const currentSpaceString = JSON.stringify(currentSpace);
    const row = currentSpace[0];
    const column = currentSpace[1];

    if (!alreadyChecked.includes(currentSpaceString)) {
      const mapNode = new MapNode(
        [row, column],
        row - 1 > -1 ? [row - 1, column] : null,
        column + 1 < gameBoard.length ? [row, column + 1] : null,
        row + 1 < gameBoard.length ? [row + 1, column] : null,
        column - 1 > -1 ? [row, column - 1] : null,
        parentMap[currentSpaceString] ? parentMap[currentSpaceString] : null,
      );

      if (currentSpaceString === JSON.stringify(endSpace)) {
        // early exit
        gameBoardMap.end = mapNode;
        return gameBoardMap.getData();
      }
  
      if (!gameBoardMap.start) {
        gameBoardMap.start = mapNode;
      }

      if (mapNode.top && gameBoard[mapNode.top[0]][mapNode.top[1]]) {
        parentMap[JSON.stringify(mapNode.top)] = mapNode;
        if (!alreadyChecked.includes(JSON.stringify(mapNode.top))) {
          queue.push(mapNode.top);
        }
      }

      if (mapNode.right && gameBoard[mapNode.right[0]][mapNode.right[1]]) {
        parentMap[JSON.stringify(mapNode.right)] = mapNode;
        if (!alreadyChecked.includes(JSON.stringify(mapNode.right))) {
          queue.push(mapNode.right);
        }
      }

      if (mapNode.bottom && gameBoard[mapNode.bottom[0]][mapNode.bottom[1]]) {
        parentMap[JSON.stringify(mapNode.bottom)] = mapNode;
        if (!alreadyChecked.includes(JSON.stringify(mapNode.bottom))) {
          queue.push(mapNode.bottom);
        }
      }

      if (mapNode.left && gameBoard[mapNode.left[0]][mapNode.left[1]]) {
        parentMap[JSON.stringify(mapNode.left)] = mapNode;
        if (!alreadyChecked.includes(JSON.stringify(mapNode.left))) {
          queue.push(mapNode.left);
        }
      }
  
      alreadyChecked.push(currentSpaceString);
    }
  }

}

const shortestPath = findShortestPath(gameBoard, [0,1], [5,2]);

console.log(shortestPath);