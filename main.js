// get variables initialzied that needs to be displayed in the screen\
let qoute = document.getElementById("qoute");
let author = document.getElementById("author");
let generate = document.getElementById("generate_btn");

// store url in the variable
let url = "https://api.quotable.io/random";

// make a function that extract data from  api

let extract = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            quote.innerText = item.content;
            author.innerText = item.author;
        });
};

// run function onload
window.addEventListener("load", extract);
// run funnction on pressing the next button
window.addEventListener("click", extract);