const fs = require("fs");

setTimeout(() => console.log("Timer 1 finsihed"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("dog.txt", () => {
  console.log("I/O finished");
  console.log("------------");

  setImmediate(() => console.log("Immediate 2 finished"));
  setTimeout(() => console.log("Timer 2 finsihed"), 0);
  setTimeout(() => console.log("Timer 3 finsihed"), 3000);
});

console.log("Hello from the top-level code");
