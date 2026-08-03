const btn = document.createElement("button");
btn.innerText = "click me";
btn.classList.add("btn-red");

document.body.prepend(btn);


const para = document.querySelector("p");

para.classList.add("highlight");