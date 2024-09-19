/* 
sort
filter
max
min
groupBy
*/


/* DO NOT USE builtin "array functions" */
function sort(list, attrName){
    for(let i = 0; i < list.length-1; i++){
        for (let j = i+1; j < list.length; j++){
            if (list[i][attrName] > list[j][attrName]){
                [list[i], list[j]] = [list[j], list[i]]
            }
        }
    }
}

const collectionsApi = { sort }

module.exports = collectionsApi;