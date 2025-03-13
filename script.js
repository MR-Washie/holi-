const holi = document.querySelector(".holi");
const btn = document.querySelector("button");
const name = document.querySelector("#name");
const bodyEle = document.querySelector("body");
const form = document.querySelector("form");


btn.addEventListener("click" , (e) => {
    e.preventDefault();
    let namevalue = name.value
    if(namevalue == "") {
        alert("First Enter your Name");
    } else {
        holi.textContent = `Mere taraf se Happy Holi ${namevalue} Aapko Aur Aapke Pure family ko`;
        form.textContent = "";
        bodyEle.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2024/08/04/01/29/01-29-36-744_512.gif')";
        bodyEle.style.backgroundSize = "cover";
    }
})