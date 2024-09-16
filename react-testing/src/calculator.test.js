import Calculator from "./calculator";


describe("calculator", () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new Calculator();
  })

  it("should add the given numbers", () => {
    // Arrange
    
    const x = 100,
        y = 200,
        expectedResult = 300;

    // Act
    const actualResult = calculator.add(x,y);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  })
  it("should subtract the given numbers", () => {
    
    // Arrange
    const x = 100,
      y = 200,
      expectedResult = -100;

    // Act
    const actualResult = calculator.subtract(x, y);

    // Assert
    expect(actualResult).toEqual(expectedResult);
  });
})

