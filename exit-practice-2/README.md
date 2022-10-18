### Exit Exam Practice 2

**Directions:** The prompts in this practice exam are designed to gauge your facility with
_iteration_, _object and array access_, _creating functions_, _implementing higher order functions_, and _recursion_.

**Problem 1:** Create a function called `filterMeetingsByMonth` that takes in two parameters - `array` and `month`. The parameter `array` represents an array of meeting objects; `month` represents a string of a month. This function should use the native filter method to return a new array of only the meeting objects that take place in the given month.

**Problem 2:** Create a function called `getMeetingRecursively` that takes in three parameters - `array`, `agenda`, and `date`. The parameter `array` represents an array of meeting objects; `agenda` is a string of the meeting agenda; `date` is a string of the meeting data. This function should iterate through the input array recursively and return the meeting object that matches the input agenda and date. If no meeting object matches, the function should return "no meeting found matching that criteria".

**Problem 3:** Create a function called `printMeetingData` that takes in two parameters - `array` and `data`. The parameter `array` represents an array of meeting objects; `data` represents an array of properties that exists in a meeting object. This function should use the native forEach method to iterate through the input array. For each item, the function should print the values at each item of the `data` array of properties. Assume that the meetingParticipants property will not be included in the `data` array.

```
printMeetingData(meetings, ['agenda', 'date']);
/*
LOGS =>
Maryland Trip
February 25, 2022
Grant Reporting Requirements
March 1, 2022
Grant Reporting Requirements
March 2, 2022
Exterior Repairs
March 10, 2022
*/
```

**Problem #4:** Create a function called `createAcronym` that takes in one parameter - `array` - which represents an array of meeting objects. This function should use the native reduce method to iterate through every item of the input array and add the zero index character of each object's `agenda` property to an output string.

```
createAcronym(meetings); // => 'MGGE'
```