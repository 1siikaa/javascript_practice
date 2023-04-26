// const reverseString  = (str) => {
//     // base case
//     if(str.length==0){
//         return str
//     }

//     // general case
//     return str.slice(str.length-1)+reverseString(str.slice(0, str.length-1))  // recursive call
// }


// // Time Complexity : O(n)
// // Space Complexity : O(1) Inplace memory


// // // function call
// // console.log(reverseString("Hello World"))


// Two pointer algorithm
// const reverseString = (str) => {
// let end =str.length-1
// let newStr = ""
// while(end !== -1){
// newStr = newStr + str[end]
// end--
// }
// return newStr
// }
// console.log(reverseString("Hello"))

// let items = [
// {id:123 , name:'name1',rating:8,},
// {id: 1234, name: 'XYz', rating:0},
// {id: 125, name: 'XYz', rating:4}
//]

//     let result = items.reduce((acc,opper)=>{
//             if(opper.rating >0){
//                 acc.rating += opper.rating
//                 acc.pass += 1
//             }
//             return acc
        
//     }, {rating : 0 , pass: 0})

//     console.log(result.rating/result.pass)




// const calculateaVG = (items) =>{
// let count =0
// let rates =0

// for(let i=0; i<items.length; i++){
//     if(items[i].rating > 0){
//         count += 1
//         rates += items[i].rating

//     }
// }
// return rates/count
// }

// console.log(calculateaVG ([]))

// var a= 3;
// var b = a++;
// var c = ++a
// console.log(a,b,c)

// let i=0;
// if(true){
//     let i=8
//     console.log(i)
// }
// console.log(i)




