let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onClick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");

searchIcon.onClick = () => {
  searchIcon.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  searchIcon.classList.remove("fa-times");
  searchForm.classList.remove("active");
};

console.log("Hello");

function myFunction() {
  var x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function handleHamburg() {
  var x = document.querySelector(".navbar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// const searchButton = document.getElementById("srchBtn")
// searchButton.addEventListener("onC")
