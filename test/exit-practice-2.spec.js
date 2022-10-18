

describe("exit-practice-2", function(){
    describe('#filterMeetingsByMonth', function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(filterMeetingsByMonth(meetings)), true);
        });
        it('should use the native filter method', function(){
            assert.equal(filterMeetingsByMonth.toString().includes('.filter('), true);
        });
        it('should return a correct array of meetings', function(){
            let result = [{
                agenda: "Maryland Trip",
                date: "February 25, 2022",
                meetingTime: "10:00AM",
                participants: ["Kyle", "Stan", "Nicole"]
              }];
            assert.deepEqual(filterMeetingsByMonth(meetings, 'February'), result);
        });
    });
    describe("#getMeetingRecursively", function(){
        it('should return an object if a meeting is found', function(){
            let result = {
                agenda: "Grant Reporting Requirements",
                date: "March 1, 2022",
                meetingTime: "1:00PM",
                participants: ["Kyle", "Vickie", "Sean"]
              };
            assert.deepEqual(getMeetingRecursively(meetings, 'Grant Reporting Requirements', 'March 1, 2022'), result);
        });
        it('should return a string if no meeting is found', function(){
            assert.equal(getMeetingRecursively(meetings, 'Grant Reporting Requirements', 'March 1, 2025'), 'no meeting found matching that criteria');
        });
        it('should call itself recursively', function(){
            assert.equal(getMeetingRecursively.toString().includes('return getMeetingRecursively('), true);
        });
    });
});