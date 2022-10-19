
describe("exit-practice-3", function(){
    describe("printTaskData", function(){
        const sandbox = sinon.createSandbox();

        beforeEach(function(){
            sandbox.spy(console, 'log');
        });

        afterEach(function(){
            sandbox.restore();
        });
        it('should print the values of each task', function(){
            let result = [
                'Feed cat',
                'false',
                'Get groceries',
                'true',
                'Order pet medication',
                'false',
                'Pay rent',
                'true',
                'Do dishes',
                'false'
            ];
            printTaskData(tasks, ['task', 'completed']);
            for (let i = 0; i < result.length; i++){
                assert.equal(console.log.getCall(i).args, result[i]);
            }
        });
        it('should print the values of each task including each item of an array', function(){
            let result = [
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
            ];
            printTaskData(tasks, ['task', 'tags']);
            for (let i = 0; i < result.length; i++){
                assert.equal(console.log.getCall(i).args, result[i]);
            }
        });
    });
    describe('#getTaskStatusRecursively', function(){
        it('should return a message if a task has been found and has not been completed', function(){
            assert.equal(getTaskStatusRecursively(tasks, 'Feed cat'), 'The task - Feed cat - has not been completed.');
        });
        it('should return a message if a task has been found and has been completed', function(){
            assert.equal(getTaskStatusRecursively(tasks, 'Get groceries'), 'The task - Get groceries - has been completed.');
        });
        it('should return a message if no task is found', function(){
            assert.equal(getTaskStatusRecursively(tasks, 'Pay internet'), 'no task found');
        });
        it('should call itself recursively', function(){
            assert.equal(getTaskStatusRecursively.toString().includes('return getTaskStatusRecursively('), true);
        });
    });
});

