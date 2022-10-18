////////////////////////////////////////////////////////////////////////////////
//////////////////////////// EXIT EXAM PRACTICE 1 //////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Welcome to Opsparkflix! Operation Spark's burgeoning online streaming service. 

You have just been hired as a software engineer and have a number of tasks to complete:
 */

/*
This is an array of Opsparkflix's current users. Each user object has a name property, 
a queue property with an array of the movies currently in the user's watch queue and a 
subscriptionStatus property that is either "paid" or "free".
 */
const users = [
    {
      name: "Alex",
      queue: ["JFK", "Rear Window", "The Thing"],
      subscriptionStatus: "paid"
    },
    {
      name: "Sean",
      queue: ["Royal Tenenbaums", "Children of Men", "Godfather part 2"],
      subscriptionStatus: "paid"
    },
    {
      name: "Kyle",
      queue: ["Magnolia", "Royal Tenenbaums", "Goodfellas"],
      subscriptionStatus: "paid"
    },
    {
      name: "Stan",
      queue: ["Killing of a Sacred Deer", "No Country for Old Men", "Magnolia"],
      subscriptionStatus: "paid"
    },
    {
      name: "John",
      queue: ["Stalker", "The Wind Will Carry Us", "Killing of a Sacred Deer"],
      subscriptionStatus: "paid"
    },
    {
      name: "Ben",
      queue: ["Stalker", "Lawrence of Arabia", "Midsommar"],
      subscriptionStatus: "paid"
    }
  ];

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #1 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let createUserString = function(user){
    return `${user.name} is a ${user.subscriptionStatus} subscriber, and the number one film in their queue is ${user.queue[0]}.`
};

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #2 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let printXFilm = function(users, position){
    for (let i = 0; i < users.length; i++){
        console.log(users[i].queue[position]);
    }
};

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #3 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let addMovieToQueue = function(users, movie){
    for (let i = 0; i < users.length; i++){
        if (i % 2 !== 0){
            users[i].queue.push(movie);
        }
    }
};

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #3 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let getUserQueue = function(users, userName){
  let queue = "";
  for (let i = 0; i < users.length; i++){
    if (users[i].name === userName){
      for (let j = 0; j < users[i].queue.length; j++){
        if (j === users[i].queue.length - 1){
          queue += users[i].queue[j];
        } else {
          queue += users[i].queue[j] + '\n';
        }
      }
    }
  }
  return queue;
}

// DO NOT ALTER CODE BELOW //////////////////////////////////////////////////////
module.exports = {
    users,
    creatUserString,
    printXFilm,
    addMovieToQueue
};