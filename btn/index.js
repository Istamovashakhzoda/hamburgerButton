"use script"
let mainTitle = document.querySelector(".main__left--title");
let mainDesc = document.querySelector(".main__left--desc");
let mainMore = document.querySelector(".main__more");

let mainRight = document.querySelector(".main__right");

let openBtn = document.getElementById("main__btn");
let closeBtn = document.getElementById("close__btn");

// mainTitle.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
// mainDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."

// console.log(mainTitle.textContent);

// mainMore.style.backgroundColor = "red";


openBtn.addEventListener("click", function(){
  alert("hi");
  mainRight.style.backgroundColor = "red";
  mainTitle.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  mainDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
});

let openMenuBtn = function(){
  mainMore.style.display = "block"
};

let closeMenuBtn = function (){
  mainMore.style.display = "none"
};

openBtn.addEventListener("click", openMenuBtn);
closeBtn.addEventListener("click",closeMenuBtn)