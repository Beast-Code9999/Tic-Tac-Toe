// header selectors
// header container 1
const mode = document.getElementById('mode');
const share = document.querySelector('.header__share')
// header container 2
const playerX = document.querySelector('.player--x');
const playerXScore = document.querySelector('.player__score--x');
const playerO = document.querySelector('.player--o');
const playerOScore = document.querySelector('.player__score--o');
// header container 3
const headerChoiceText = document.querySelector('.header__choice-text');


// footer script
const footer = document.querySelector('.footer__year');
console.log(footer)
let year = new Date().getFullYear()
footer.textContent = year;