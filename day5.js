// 1st problem

function countVowels(str){
    let count = 0;
    for(const char of str ){
        if( char === "a" || char === "e" || char === "i" || char === "o" ||  char === "u" ){
            count ++;
        }
    }
    return count;
}

// 2nd problem

const countVowels = (str) =>{
    let count = 0;
    for(const char of str ){
        if( char === "a" || char === "e" || char === "i" || char === "o" ||  char === "u" ){
            count ++;
        }
    }
    return count;
}

// 3rd problem

let nums= [2,4,6,8];
nums.forEach[(nums) => {
    console.log(nums * nums);
}];

// 4th problem

let marks = [87, 98, 67];
let toppers = marks.filter[(val) => {
    return val > 90 ;
}];
console.log(toppers);

// 5th problem

let n = prompt("Enter a number : ");

let arr=[];
for(let i=1 ; i<= n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce[(res, curr) =>{
    return res + curr;
}];

console.log("factorial = ", factorial);

let factorial = arr.reduce[(res, curr) =>{
    return res + curr;
}];
console.log("factorial = ", factorial);