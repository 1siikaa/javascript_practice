let sum=0
let cache={}
function calc(n){
    if(cache[n]){
        console.log('i am here')
        return cache[n]
    }
    else{
    for(let i=1; i<=n; i++){
        sum += i
    }
    cache[n]=sum
    return sum
}
}





// const memoize = (func) => {
//     let cache={}
//     return function(...args){
//         let n= args[0]
//         console.log(args[0])
//         if(cache[n]){
//             console.log("cache");
//             return cache[n];
//         }
//         else{
//             console.log("calculating first time")
//             let result = func(n)
//             cache[n] = result
//             console.log(cache)
//             return result;
//         }
//     }
// }

//first time call
console.time()
// const efficient = memoize(calc);
// console.log(efficient(5))
console.log(calc(5))
console.timeEnd()
console.log(cache)

// caching call
console.time()
console.log(calc(5))
console.timeEnd()