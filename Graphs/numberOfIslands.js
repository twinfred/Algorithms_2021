// Algo challenge source: https://leetcode.com/problems/number-of-islands/

var numIslands = function(grid) {
  const rows = grid.length;
  
  if (rows === 0) return 0;
  
  const cols = grid[0].length;
  let numberOfIslands = 0;
  
  for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
          if (grid[i][j] == 1) {
              markAdjacentIslands(grid, i, j, rows, cols);
              numberOfIslands += 1;
          }
      }
  }
  
  return numberOfIslands;
};

var markAdjacentIslands = function(grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] != 1) return;
  
  grid[i][j] = 2;
  
  markAdjacentIslands(grid, i - 1, j, rows, cols); // top
  markAdjacentIslands(grid, i, j + 1, rows, cols); // right
  markAdjacentIslands(grid, i + 1, j, rows, cols); // bottom
  markAdjacentIslands(grid, i, j - 1, rows, cols); // left
}