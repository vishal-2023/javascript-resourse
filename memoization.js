
/* Memoization is a form of caching where we store data inside a variable but not permanet
memory like localstorage & IndexDb.

basically there are 3 way to memoization==>
    1- using closure
    2- using High Order Function
    3- default parameter(using es6)
*/

// /* using closure -
function memoisedSum(){
    let result={};
    return function(...args){
        if(result[`${args}`]!== undefined){
            console.log("object");
            return result[`${args}`]
        }
        let sum=args.reduce((i,curr) => curr+i,0);
        result[`${args}`]=sum;
        console.log(result,"re")
        return sum;
    }
}

const s1=memoisedSum();
console.log(s1(1,2,4,5,6))
console.log(s1(0,0))
console.log(s1(0,0))

// */