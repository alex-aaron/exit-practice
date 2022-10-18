////////////////////////////////////////////////////////////////////////////////
//////////////////////////// EXIT EXAM PRACTICE 1 //////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Welcome to SchedHead, the internet's top meeting and appointment setting 
application. We need to add some more features.
 */

// sample data
const meetings = [
    {
      agenda: "Maryland Trip",
      date: "February 25, 2022",
      meetingTime: "10:00AM",
      participants: ["Kyle", "Stan", "Nicole"]
    },
    {
      agenda: "Grant Reporting Requirements",
      date: "March 1, 2022",
      meetingTime: "1:00PM",
      participants: ["Kyle", "Vickie", "Sean"]
    },
    {
      agenda: "Grant Reporting Requirements",
      date: "March 2, 2022",
      meetingTime: "1:00PM",
      participants: ["Vickie", "Stephanie", "Stan"]
    },
    {
      agenda: "Exterior Repairs",
      date: "March 10, 2022",
      meetingTime: "4:30PM",
      participants: ["Stan", "Vickie", "John"]
    }
  ];
    
////////////////////////////////////////////////////////////////////////////////
// PROBLEM #1 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let filterMeetingsByMonth = function(array, month){
    return array.filter(function(meeting){
        return meeting.date.includes(month);
    });
};

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #2 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

let getMeetingRecursively = function(array, agenda, date){
    // base
    if (array.length === 0){
        return 'no meeting found matching that criteria';
    }
    // recursion
    if (array[0].agenda === agenda && array[0].date === date){
        return array[0];
    }
    return getMeetingRecursively(array.slice(1), agenda, date);
};

////////////////////////////////////////////////////////////////////////////////
// PROBLEM #2 //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// DO NOT ALTER CODE BELOW /////////////////////////////////////////////////////
module.exports = {
    meetings,
    filterMeetingsByMonth,
    getMeetingRecursively
};