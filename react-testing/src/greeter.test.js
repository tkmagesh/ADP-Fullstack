import Greeter from './greeter'


test.skip('Greeter : greet with "Good Day"', () => {
    // Arrange
    // prepare the dependencies (mock)
    
    const mockTimeServiceForAfternoon = {
      getCurrent: jest
        .fn()
        .mockImplementation(() => new Date(2024, 8, 16, 15, 0, 0)),
    };

    const greeter = new Greeter(mockTimeServiceForAfternoon);
    greeter.userName = 'Magesh'
    const expectedMessage = 'Hi Magesh, Good Day!'

    // Act
    const actualMessage = greeter.greet()

    // Assert
    expect(actualMessage).toEqual(expectedMessage)
    expect(mockTimeServiceForAfternoon.getCurrent).toHaveBeenCalled()
    // expect(mockTimeServiceForAfternoon.getCurrent).toHaveBeenCalledTimes(2);
})

test('Greeter : greet with "Good Morning"', () => {
  // Arrange
  // prepare the dependencies (mock)
  const mockTimeServiceForMorning = {
    getCurrent: jest.fn().mockImplementation(() => new Date(2024, 8, 16, 9, 0, 0)),
  };

  const greeter = new Greeter(mockTimeServiceForMorning);
  greeter.userName = "Magesh";
  const expectedMessage = "Hi Magesh, Good Morning!";

  // Act
  const actualMessage = greeter.greet();

  // Assert
  expect(actualMessage).toEqual(expectedMessage);
});