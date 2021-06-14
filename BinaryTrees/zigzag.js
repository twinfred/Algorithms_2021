// Algo challenge source: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
  if (!root) return [];
      
  const result = [];
  let queue = [root];
  let reverseNextLevel = true;
  
  while(queue.length) { 
      const currLevel = [];
      const levelSize = queue.length;
      const currLevelQueue = [];
      
      for (i = 0; i < levelSize; i++) {
          let currNode = queue.shift();
          currLevel.push(currNode.val);
          
          if (reverseNextLevel) {
              if (currNode.left) currLevelQueue.unshift(currNode.left);
              if (currNode.right) currLevelQueue.unshift(currNode.right);
          } else {
              if (currNode.right) currLevelQueue.unshift(currNode.right);
              if (currNode.left) currLevelQueue.unshift(currNode.left);
          }
      }
      
      queue = currLevelQueue;
      result.push(currLevel);
      
      reverseNextLevel = !reverseNextLevel;
  }
  
  return result;
};