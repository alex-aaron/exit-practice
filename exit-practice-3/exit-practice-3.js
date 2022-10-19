////////////////////////////////////////////////////////////////////////////////
//////////////////////////// EXIT EXAM PRACTICE 3 //////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Welcome to 'Dont Mind if I Todo', the premier 'todo' organizing appication for 
communal living situations. 
*/

// SAMPLE DATA //
const tasks = [
    {
      task: 'Feed cat',
      completed: false,
      assignedTo: ['Stan'],
      recurs: 'Weekly',
      tags: ['quick', 'physical'],
      priority: 1
    },
    {
      task: 'Get groceries',
      completed: true,
      assignedTo: ['Alex'],
      recurs: 'Weekly',
      tags: ['travel', 'long', 'physical'],
      priority: 2
    },
    {
      task: 'Order pet medication',
      completed: false,
      assignedTo: ['Stephanie'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 3
    },
    {
      task: 'Pay rent',
      completed: true,
      assignedTo: ['Alex', 'Stephanie', 'Stan', 'Kyle'],
      recurs: 'Monthly',
      tags: ['quick', 'internet'],
      priority: 4
    },
    {
      task: 'Do dishes',
      completed: false,
      assignedTo: ['Kyle'],
      recurs: 'Weekly',
      tags: ['physical', 'long'],
      priority: 5
    },
  ];

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #1 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let printTaskData = function(array, props){
   for (let i = 0; i < array.length; i++){
    let task = array[i];
    for (let j = 0; j < props.length; j++){
        if (Array.isArray(task[props[j]])){
            task[props[j]].forEach(item => {
                console.log(item);
            })
        } else {
            console.log(task[props[j]]);
        }
    }
   }
};

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #2 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let getTaskStatusRecursively = function(array, task){
  // base
  if (array.length === 0){
    return 'no task found';
  }
  // recursion
  if (array[0].task === task){
    let message;
    if (array[0].completed === true){
      message = `The task - ${array[0].task} - has been completed.`
    } else {
      message = `The task - ${array[0].task} - has not been completed.`
    }
    return message;
  }
  return getTaskStatusRecursively(array.slice(1), task);
}

console.log(getTaskStatusRecursively(tasks, 'Get groceries'));