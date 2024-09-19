
function addCallback(x,y, callback){
    setTimeout(() => {
        const result = x + y;
        console.log("[addCallback] returning result");
        callback(result);
    }, 5000);
}

function addPromise(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = x + y;
          console.log("[addCallback] returning result");
          resolve(result);
        }, 5000);
    })
  
}

module.exports = { addCallback, addPromise };