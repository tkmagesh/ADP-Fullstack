/* 
sort
filter
max
min
groupBy
*/


/* DO NOT USE builtin "array functions" */
function sort(list, comparer){
    let comparerFn;
    if (typeof comparer !== 'string' && typeof comparer !== 'function')
        throw new Error('Invalid comparer')
    if (typeof comparer === 'string'){
        comparerFn = function(i1, i2){
            return i1[comparer] - i2[comparer]
        }
    } else {
        comparerFn = comparer;
    }
    
    for(let i = 0; i < list.length-1; i++){
        for (let j = i+1; j < list.length; j++){
            if (comparerFn(list[i], list[j]) > 0){
                [list[i], list[j]] = [list[j], list[i]]
            }
        }
    }
}

function filter(list, fn){
    let result = []
    for(let item of list){
        if (fn(item)){
            result.push(item)
        }
    }
    return result
}

function max(list, fn){
    let result = list[0]
    for (let idx = 1; idx < list.length; idx++){
        if (!fn(result, list[idx]))
            result = list[idx]
    }
    return result
}

function min(list, fn) {
  let result = list[0];
  for (let idx = 1; idx < list.length; idx++) {
    if (!fn(result, list[idx])) result = list[idx];
  }
  return result;
}

const collectionsApi = { sort, filter, max, min };

module.exports = collectionsApi;