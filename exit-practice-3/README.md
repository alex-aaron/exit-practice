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

**Problem #2:** Create a function called `getTaskStatusRecursively` that takes in two parameters - `array` and `task`. The parameter `array` represents an array of task objects; `task` represent of a string of a task name. This function should recursively iterate through the input array. If the task is found, the function should determine if it's `completed` property is true or false. If true, the function should return the string 'The task - {task} - has been completed.' If false, the function should return the string 'The task - {task} - has not been completed.' If the task is not found, the function should return the string 'no task found'.

**Problem #3** Create a function called `createStringByPriority` that takes in one parameter - `array` - which represents an array of task objects. This function should use the native reduce method to iterate through the array. The function's use of reduce should access the index of each task object's `task` property represented by the current task's `priority`. For instance, the first task object's value at priority is 1, so the callback function in reduce should access the 1 index of 'Feed cat' ('e') and add that to the output string that reduce will return.

```
createStringByPriority(tasks); // => 'eters'
```

**Problem #4:** Create a function called `createTaskMessages` that takes in one parameter - `array` - which represents an array of task objects. This function should use the native filter and map methods to return an array of messages like the example below for only the task objects that have not been completed:

```
createTaskMessages(tasks); 
/*
=> 
[
  'Stan must Feed cat',
  'Stephanie must Order pet medication',
  'Kyle, Stan must Do dishes'
]
*/
```