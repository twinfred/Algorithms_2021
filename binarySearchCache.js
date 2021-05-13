const userData = [
  {
    id: 1,
    user: 'tim'
  },
  {
    id: 3,
    user: 'ruben'
  },
  {
    id: 15,
    user: 'isadora'
  },
  {
    id: 21,
    user: 'jojo'
  },
  {
    id: 25,
    user: 'regine'
  },
  {
    id: 31,
    user: 'tim2'
  },
  {
    id: 37,
    user: 'ruben2'
  },
  {
    id: 45,
    user: 'isadora2'
  },
  {
    id: 52,
    user: 'jojo2'
  },
  {
    id: 60,
    user: 'regine2'
  },
];

const cachedUsernames = {};

function findUserById(id) {
  if (cachedUsernames[id]) {
    return cachedUsernames[id];
  }
  let low = 0;
  let high = userData.length - 1;

  while (low <= high) {
    console.log('starting low', low);
    console.log('starting high', high);

    let mid = Math.floor((low + high) / 2);
    let guess = userData[mid].id;

    console.log('mid:', mid);
    console.log('guess:', guess);

    if (guess === id) {

      cachedUsernames[id] = userData[mid].user;

      return userData[mid].user;
    }

    if (guess > id) {
      console.log('it\'s lower');

      high = mid - 1;
    } else {
      console.log('it\s higher');
      
      low = mid + 1;
    }

    console.log('new low', low);
    console.log('new high', high);
  }

  return('cannot be found');
}

console.log('!!! --- The user you\'re looking for is:', findUserById(21), '--- !!!');
console.log('!!! --- The user you\'re looking for is:', findUserById(25), '--- !!!');
console.log(cachedUsernames);
console.log('!!! --- The user you\'re looking for is:', findUserById(21), '--- !!!');
