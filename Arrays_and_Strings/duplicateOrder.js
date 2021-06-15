// given a string input, return a string that has the duplicate letters removed
// and is reordered such that the string is in order of the duplicate frequency

// EXAMPLES
// Input: 'hello world'
// Output: 'lohe wrd'

function removeDupesReorderFrequency(str) {
  console.time(`${str} processing time`);
  let frequency = {};
  let arr = str.split('');
  let stringToReturn = '';

  for (i = 0; i < arr.length; i + 1) {
    const letter = arr[i];
    let count = 0;

    while (arr.includes(letter)) {
      count++;
      arr.splice(arr.indexOf(letter), 1);
    }

    frequency[letter] = count;

  };

  frequency = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
  
  frequency.forEach(element => {
    stringToReturn += element[0];
  });

  console.timeEnd(`${str} processing time`);
  return stringToReturn;
}

console.log('output:', removeDupesReorderFrequency('hello world'));
console.log('output:', removeDupesReorderFrequency('timothy winfred'));
console.log('output:', removeDupesReorderFrequency('dollywood'));
console.log('output:', removeDupesReorderFrequency('fleetwood mac'));
