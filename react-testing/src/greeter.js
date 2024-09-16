
class Greeter{
    userName = '';

    constructor(timeService){
        this.timeService = timeService;
    }

    greet(){
        // const currentTime = new Date() //=> violates DIP
        const currentTime = this.timeService.getCurrent()
        const currentHour = currentTime.getHours();
        if (currentHour < 12){
            return `Hi ${this.userName}, Good Morning!`
        }
        return `Hi ${this.userName}, Good Day!`;
    }
}

export default Greeter;