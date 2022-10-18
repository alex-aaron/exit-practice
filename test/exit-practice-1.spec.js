

describe("exit-practice-1", function(){
    describe("#createUserString", function(){
        it('should return a string', function(){
            assert.equal(typeof createUserString(users[0]), 'string');
        });
        it('should return a properly formatted string', function(){
            console.log(createUserString(users[0]));
            assert.equal(createUserString(users[0]), 'Alex is a paid subscriber, and the number one film in their queue is JFK.');
        });
    });
    describe('#printXFilm', function(){
        const sandbox = sinon.createSandbox();

        beforeEach(function(){
            sandbox.spy(console, 'log');
        });

        afterEach(function(){
            sandbox.restore();
        });
        it('print the correct films to the console', function(){
            printXFilm(users, 0);
            let result = [
                'JFK',
                'Royal Tenenbaums',
                'Magnolia',
                'Killing of a Sacred Deer',
                'Stalker',
                'Stalker'
            ];
            for (let i = 0; i < result.length; i++){
                assert.equal(console.log.getCall(i).args, result[i]);
            }
        });
    });
    describe('#addMovieToQueue', function(){
        it("should add a movie to the correct items in the user's array", function(){
            let copy = users.slice();
            console.log(copy[1].queue);
            addMovieToQueue(copy, 'Decision to Leave');
            assert.equal(copy[1].queue[copy[1].queue.length - 1], 'Decision to Leave');
            assert.equal(copy[3].queue[copy[1].queue.length - 1], 'Decision to Leave');
        });
        it('should not add a movie to the even indexed values of the array', function(){
            let copy = users.slice();
            console.log(copy[1].queue);
            addMovieToQueue(copy, 'Decision to Leave');
            assert.notEqual(copy[0].queue[copy[1].queue.length - 1], 'Decision to Leave');
            assert.notEqual(copy[2].queue[copy[1].queue.length - 1], 'Decision to Leave');
        });
    });
    describe("getUserQueue", function(){
        it('should return a string', function(){
            assert.equal(typeof getUserQueue(users, 'Alex'), 'string');
        });
        it('should return a string formatted with line breaks', function(){
            assert.equal(getUserQueue(users, 'Alex'), "JFK\nRear Window\nThe Thing");
        });
    });
});
