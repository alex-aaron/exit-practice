

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
    describe('#printMeetingData', function(){
        const sandbox = sinon.createSandbox();

        beforeEach(function(){
            sandbox.spy(console, 'log');
        });

        afterEach(function(){
            sandbox.restore();
        });
        it('should print the correct meeting data', function(){
            let result = [
                'Maryland Trip',
                'February 25, 2022',
                'Grant Reporting Requirements',
                'March 1, 2022',
                'Grant Reporting Requirements',
                'March 2, 2022',
                'Exterior Repairs',
                'March 10, 2022'
            ];
            printMeetingData(meetings, ['agenda', 'date']);
            for (let i = 0; i < result.length; i++){
                assert.equal(console.log.getCall(i).args, result[i]);
            }
        });
    });
    describe("#createAcronym", function(){
        console.log('hit this test');
        it('should return a string', function(){
            assert.equal(typeof createAcronym(meetings), 'string');
        });
        it('should return a correct string', function(){
            assert.equal(createAcronym(meetings), 'MGGE');
        });
        it('should use native reduce method', function(){
            assert.equal(createAcronym.toString().includes('.reduce('), true);
        });
    });
});