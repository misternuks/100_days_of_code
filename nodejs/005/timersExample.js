// Execute a function after a delay using setTimeout
console.log('Setting a timeout for 3 seconds...');

const timeoutId = setTimeout(() => {
  console.log('3 seconds have passed.');
}, 3000);

// Execute a function repeatedly with a delay using setInterval
console.log('Setting an interval to log every 2 seconds...');

const intervalId = setInterval(() => {
  console.log('2 seconds have passed since the last log.');
}, 2000);

// Stop the timeout from running
console.log('Clearing the timeout...');
clearTimeout(timeoutId);

// Stop the interval from running after 10 seconds
setTimeout(() => {
  console.log('Clearing the interval after 10 seconds...');
  clearInterval(intervalId);
}, 10000);
