### Exit Exam Practice 

**Directions:** The prompts in this practice exam are designed to gauge your facility with
_iteration_, _object and array access_, and _creating functions_.

**Problem #1:** Create a function called `createUserString` that takes in one parameter - `user` - which represents a user object. This function should use object and array access methods to create a string formatted as such: 

```
"<name> is a <subscriptionStatus> subscriber, and the number one film in their queue is <film at zero index of queue array>".
```

**Problem #2:** Create a function called `printXFilm` that takes in two parameters - `users` and `position`. The parameter `users` represents an array of user objects; `position` is a number representing a movie's position in any user's queue array. This function should iterate through the array of user objects and print the movie at the input `position` for every user's queue array. Assume the value `position` represents an index.

```
printXFilm(users, 0); 
/*
LOGS =>
JFK
Royal Tenenbaums
Magnolia
Killing of a Sacred Deer
Stalker
Stalker
*/
```

**Problem #3:** Create a function called `addFilmToQueue` that takes in two parameters - `users` and `movie`. The value `users` represents an array of user objects; `movie` represents a string of a new movie to add. This function should add the movie to the end of the queue for every other user starting at the 1 index. Look at the example below to clarify how the films should be added.

```
[ <item>, <add movie>, <item>, <add movie>, <item>]
```