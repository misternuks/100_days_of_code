// Different kinds of console messages
console.log("This is a console log message.");
console.error("This is a console error message.");
console.warn("This is a console warning message.");

// Use console.time() and console.timeEnd() to measure time
console.time('Timer')
for (let i = 0; i < 1000000; i++) {
  // Some code
}
console.timeEnd('Timer');

// Use console.trace() to print a stack trace
function funcA() {
  funcB();
}

function funcB() {
  console.trace('Trace point');
}

funcA();
