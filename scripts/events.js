var dropdown = document.querySelector(".hamburger-box");

dropdown.addEventListener("click", function() {
  dropdown.classList.toggle("is-active");
});

var dropdownArray = document.getElementsByClassName("c-nav__header");
var dropdownItem = document.getElementsByClassName("c-nav__header-item");

for(let i = 0; i < dropdownItem.length; i++) {
  dropdownItem[i].addEventListener("click", function(e) {
    e.target.classList.toggle("is-active");
  });
}

var questions = document.getElementsByClassName("p-questions");

for(let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    questions[i].classList.toggle("is-active");
  });
}

var checkbox = document.querySelector(".o-label--checkbox");

checkbox.addEventListener("click", function() {
  checkbox.classList.toggle("is-active");
});

// FAQ

var faq = document.getElementsByClassName("accordion__visible");

for(let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    faq[i].classList.toggle("is-active");
  });
}