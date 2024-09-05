function onBtnDemoClick() {
  /* 
  console.log("This is log message");
  console.warn("This is a warning");
  console.info("This is an info");
  console.error("This is an error"); 
  */
  
  console.time('printPrimes(0,2000)')
  printPrimes(20,2000)
  console.timeEnd("printPrimes(0,2000)"); 
 
//  test_isPrime_11()
    // printGroups()
    // printTable()
}

function printTable(){
    const products = [
      { id: 100, name: "Pen", cost: 10 },
      { id: 101, name: "Pencil", cost: 5 },
      { id: 102, name: "Marker", cost: 50 },
      { id: 103, name: "Scribble Pad", cost: 20 },
    ];
    console.table(products)
}

function printGroups(){
    console.group("Group-1");
    console.group("Group-11");
    console.log(
      "Officia eiusmod eiusmod laboris officia. Labore fugiat dolore laboris anim nostrud est eiusmod qui dolore duis minim irure elit. Sit exercitation dolore occaecat mollit eiusmod id Lorem dolore nisi. Sunt dolore sit non est elit eu ex nulla officia duis. Eu incididunt mollit magna minim eu velit exercitation incididunt nisi esse sit. Incididunt non ex amet ut ullamco ex deserunt mollit exercitation. Veniam occaecat ut laborum minim irure consectetur amet et dolor culpa nulla."
    );
    console.groupEnd();
    console.group("Group-12");
    console.log(
      "Cillum labore enim amet exercitation. Minim adipisicing reprehenderit elit sint anim cillum consectetur eiusmod cupidatat consequat fugiat eiusmod fugiat. Reprehenderit culpa velit qui pariatur occaecat. Ipsum deserunt veniam dolore dolor eiusmod adipisicing dolor qui voluptate laboris. Adipisicing id consequat aliquip veniam sunt tempor dolor veniam ut dolore sint culpa. Et veniam officia qui voluptate labore qui cillum."
    );
    console.groupEnd();
    console.groupEnd();
}

function printPrimes(start, end){
    let primes = []
    for (let no = start; no <= end; no++){
        if (isPrime(no)){
            primes.push(no)
        }
    }
    console.log(primes)
}

function test_isPrime_11(){
    let result = isPrime(11)
    console.assert(result === false, '11 is a prime number')
    // console.trace()
}

function isPrime(no){
    for (let i = 2; i <= (no/2); i++) {
        if (no % i == 0){
            return false
        }
    }
    console.count('PrimeNo')
    return true
}
const btnDemo = document.getElementById("btnDemo");
btnDemo.addEventListener("click", onBtnDemoClick);
