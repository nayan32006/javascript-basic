// // problem num 1
let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let val of marks){
    sum += val;
}
let avg = sum/ marks.length ;
console.log("the avg value of class = ", avg);

// problem num 2
let items = [250, 645, 300, 900, 50];let i=0;

for(let val of items){
    let offer = val / 10;
    items[i] = items[i]- offer;
    console.log("val after aplying offer = ${items[i]}" );
    i++;
}

// problem num 3

let companies = ["bloomerg", "Microsoft", "uber", "google", "IVM", "Netflix"];

companies.shift();

companies.splice(2, 1, "ola");

companies.push("Amazone");
