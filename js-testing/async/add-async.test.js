const addAsync = require('./add-async');

describe.skip("Async add (callback)", () => {
    it('should add the given numbers', (done) => {
        const x = 100,
            y = 200,
            expected = 300;
        addAsync.addCallback(x,y, function(result){
            expect(result).toBe(expected);
            done()
        });
    }, 6000);
});

describe.skip("Async add (promise)", () => {
  it("should add the given numbers", async () => {

    // arrange
    const x = 100,
      y = 200,
      expected = 300;

    // act
    const result = await addAsync.addPromise(x, y)

    // assert
    expect(result).toBe(expected);
  }, 6000);
});