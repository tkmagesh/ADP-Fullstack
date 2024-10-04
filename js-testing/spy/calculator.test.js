const Calculator = require('./calculator');
const ResultWriter = require('./result-writer');


/* 
// poor man's mock implementation
function getMock(){
    let result;
    let called = false;
    let mockFn = function(...args){
        result = args;
        called = true;
    }
    const hasBeenCalled = function(){
        return called;
    };
    return {
        mockFn, hasBeenCalled
    }
} 
*/
describe("Calculator", () => {
    it("Should add the given numbers", () => {
        // Arrange

        
        /* 
        const resultWriterMock = {
            write : jest.fn()
        };  
        */
        const resultWriterMock = new ResultWriter()
        jest.spyOn(resultWriterMock, "write")

       /* 
        const mockObj = getMock()
        const resultWriterMock = {
          write: mockObj.mockFn,
        }; */
        const calculator = new Calculator(resultWriterMock); 
       
        // Act
        calculator.add(100,200);

        // Assert
        expect(resultWriterMock.write).toHaveBeenCalledWith(
          "add(100 and 200) = 300"
        );
        expect(resultWriterMock.write).toHaveBeenCalledTimes(1)
    })
})