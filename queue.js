// Problem **
// ********************************************
// Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).
// Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.
// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
// https://www.interviewcake.com/question/python/queue-two-stacks?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23189:%20Implement%20A%20Queue%20With%20Two%20Stacks&utm_medium=email&utm_medium=email

// ********************************************
// My Work **
// ********************************************
// ********************************************

// Initialize a Queue **
// *********************
var Queue = function() {
  this.storage = {};
  this.count = 0; 
  this.lowestCount = 0;
}

Queue.prototype.enqueue = function(value) {
  if (value) {
    this.storage[this.count] = value;
    this.count++;
  }
}

Queue.prototype.dequeue = function() {
  if (this.count - this.lowestCount === 0 ) {
    return undefined;
  }

  var result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
}

Queue.prototype.size = function() {
  return this.count - this.lowestCount;
}

Queue.prototype.isEmpty = function() {
  if (this.count - this.lowestCount === 0) {
    return true;
  }
  return false;
}

// Initialize a Stack **
// *********************
var Stack = function() {
  this.storage = {};
  this.count = 0;
}

Queue.prototype.peek = function() {
  return this.storage[this.lowestCount];
}

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count]
  return result;
}

Stack.prototype.size = function() {
  return this.count;
}

// Create Stacks **
// ****************


var stackOne = new Stack();
var stackTwo = new Stack();

stackOne.push("bananas");
stackOne.push("in pajamas");

stackTwo.push("hello");
stackTwo.push("world");


// Create a Queue **
// ******************

var newQueue = new Queue();

newQueue.enqueue(stackOne);
newQueue.enqueue(stackTwo);


// Test **
// ******************

newQueue.dequeue();
newQueue.dequeue();

console.log(newQueue.size())
console.log(newQueue.isEmpty())
console.log(newQueue);
