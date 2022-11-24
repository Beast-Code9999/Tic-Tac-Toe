// header selectors
// header container 1
const mode = document.getElementById('mode');
const share = document.querySelector('.header__share')
// header container 2
console.log(share)


const footer = document.querySelector('.footer__year');
console.log(footer)
let year = new Date().getFullYear()
footer.textContent = year;