// write even nuf from 1 to 100

for(let num=0; num<=100; num++){
    if(num% 2 === 0){
        console.log("num = ", num);
    }
}
console.log(" nice !");

// gauseNum game

let gauseNum = 25;
let userNum = prompt("Enter gauseNum: ");

while(userNum != gauseNum){     
   userNum = prompt("erong num, enter again : ");

}
console.log("congaratulation , tou enter right number !");

// // fullname genrate with start @ and length of string

let fullName = prompt("Enter fullName without space :");

let userName = "@" + fullName + fullName.length ;

console.log(userName);