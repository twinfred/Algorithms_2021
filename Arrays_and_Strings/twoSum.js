// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// -- Example 1 --
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// -- Example 2 --
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// -- Example 3: --
// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Look at each index of the array, starting with nums[0] - currentIndex
  // Add that number to each subsequent number - subIndex
  // If the sum equals the target, return both indexes
  let answer;
  nums.some((num, index) => {
    let subIndex = index + 1;
    let sum = num + nums[subIndex];
    
    while (subIndex < nums.length) {
      sum = num + nums[subIndex]
      
      if (sum === target) {
        answer = [index, subIndex];
        return;
      } else {
        subIndex++;
      }
    }
  })
  
  return answer;
};

function runTests() {
  let testCases = [
    { nums: [2,7,11,15], target: 9, answer: [0,1] },
    { nums: [3,2,4], target: 6, answer: [1,2] },
    { nums: [1,6,3,8,2], target: 10, answer: [3,4] },
    { nums: [3,3], target: 6, answer: [0,1] },
  ];

  testCases.forEach(({nums, target, answer}, index) => {
    async function runTest() {
      const result = await twoSum(nums, target);
      if (!result || (result[0] !== answer[0] && result[1] !== answer[1])) {
        throw new Error(`Test at index ${index} failed`);
      }
    }

    runTest();
  });

  console.log(`All ${testCases.length} test cases successfully passed!`)
}

runTests();