// header selectors
// header container 1

const selectMode = (() => {
    const mode = document.getElementById('mode');
    // console.log(mode.options[mode.selectedIndex].value)
    // console.log(mode.value)
    
    const selectedMode = () => {
        mode.addEventListener('change', changeMode)
        
        function changeMode() {
            console.log(mode.value)
            return mode.value
        }
    }

    return {
        selectedMode
    }
})()



window.addEventListener('click', selectMode.selectedMode())

const share = document.querySelector('.header__share')
// header container 2
const playerX = document.querySelector('.player--x');
const playerXScore = document.querySelector('.player__score--x');
const playerO = document.querySelector('.player--o');
const playerOScore = document.querySelector('.player__score--o');
// header container 3
const headerChoiceText = document.querySelector('.header__choice-text');
// restart game 





const restart = document.querySelector('.restart');
function restartGame() {

}
// table for animation effect when losing or winning
const table = document.querySelector('.table');
// main section
const mainSection = document.querySelector('.section-main');

const displaySign = () => {
    const tableData = document.querySelectorAll('.table__data')
    tableData.forEach(element => {
        element.addEventListener('click', addSign)
    });

    function addSign() {
        
    }
}


// footer script
const footer = document.querySelector('.footer__year');
console.log(footer)
let year = new Date().getFullYear()
footer.textContent = year;