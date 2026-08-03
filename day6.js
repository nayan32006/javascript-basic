// // let h2 = document.querySelector("h2");

// // console.dir(h2.innerText);

// // h2.innerText = h2.innerText + "fro A C S";/

let divs = document.querySelectorAll(".box");


// div[0].innerText = " new uniqe value ";
// div[1].innerText = " new uniqe value ";
// div[2].innerText = " new uniqe value ";
// div[3].innerText = " new uniqe value ";

let idx = 1;

for(div of divs){
    div.innerText = 'new uniqe value  ',{idx};
    idx++;
}