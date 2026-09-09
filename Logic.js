// Practice Question 1

let news = " with Apna College ";

let h3 = document.querySelector("h3");
//console.dir(h3.innerText);

//change heading using JS

h3.innerText = h3.innerText.concat(news);

h3.innerText = h3.innerText.toUpperCase();

console.dir(h3.innerText);

//Practice Question 2

let divs = document.querySelectorAll(".box");
console.dir(divs);

let d1 = " No: 1";

divs[0].innerText = divs[0].innerText.concat(d1);

let d2 = " No: 2";

divs[1].innerText = divs[1].innerText.concat(d2);

let d3 = " No: 3";

divs[2].innerText = divs[2].innerText.concat(d3);