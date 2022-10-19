### Exit Exam Practice 3

**Directions:** The prompts in this practice exam are designed to gauge your facility with
_iteration_, _object and array access_, _creating functions_, _implementing higher order functions_, and _recursion_.

**Problem #1:** Create a function called `printTaskData` that takes in 2 parameters - `array` and `props`. The parameter `array` represents an array of task objects; `props` is an array of strings representing properties in each task object. This function should iterate through the input array and for each item the function should print the value at each value of `props`. If the value in `props` represents an array, the function should iterate through the array and print each item one at a time.

```
printTaskData(tasks, ['task', 'tags']);
/*
LOGS =>
 'Feed cat',
 'quick', 
 'physical',
 'Get groceries',
 'travel',
 'long',
 'physical',
 'Order pet medication',
 'quick',
 'internet',
 'Pay rent',
 'quick',
 'internet',
 'Do dishes',
 'physical',
 'long'
*/
```