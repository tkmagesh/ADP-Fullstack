


// ver 1.0
function add(x,y){
    console.log('Add Result :', x + y)
}

function subtract(x,y){
    console.log("Subtract Result :", x - y);
} 

function multiply(x,y,z){
    console.log("Multiply Result :", x * y * z);
}

// ver 2.0
// The following violates OCP
/* 
function add(x,y){
    console.log('Operation started')
    console.log('Add Result :', x + y)
    console.log('Operation completed...!')
}

function subtract(x,y){
    console.log("Operation started");
    console.log("Subtract Result :", x - y);
    console.log("Operation completed...!");
} 
*/

// Use wrapper functions instead of modifying existing functions
/* 
function logAdd(x,y){
    console.log("Operation started");
    add(x,y)
    console.log("Operation completed...!");
}

function logSubtract(x, y) {
  console.log("Operation started");
  subtract(x, y);
  console.log("Operation completed...!");
} 
*/

// ver 3.0
// the above refactored to avoid duplication by applying 'commonality-variability analysis'
function logOperation(opFn, x, y){
    console.log("Operation commenced");
    opFn(x, y);
    console.log("Operation completed...!");
}

// ver 4.0
function getLogOperation(opFn){
    return function(...args){
        console.log("Operation commenced");
        opFn(...args);
        console.log("Operation completed...!");
    }
}


function main(){
  // ver 1.0
  /* 
    add(100, 200);
    subtract(100, 200); 
    */

  // ver 2.0
  /* 
    logAdd(100,200)
    logSubtract(100,200) 
    */

  // ver 3.0
  /* 
    logOperation(add, 100, 200)
    logOperation(subtract, 100, 200) 
    */

  // ver 4.0
  add = getLogOperation(add);
  subtract = getLogOperation(subtract);

  add(100, 200);
  subtract(100, 200);

  multiply = getLogOperation(multiply);
  multiply(10, 20, 30);

}


