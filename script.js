// header selectors
// header container 1
const selectMode = (() => {
    const mode = document.getElementById('mode');
    // console.log(mode.options[mode.selectedIndex].value)
    // console.log(mode.value)
    let currentMode = 'easy';
    
    const selectedMode = () => {
        mode.addEventListener('change', changeMode)
        function changeMode() {
            currentMode = mode.value
        }
        console.log(currentMode);
        return currentMode  
    }
    return {
        selectedMode,
    }
})();
// window.addEventListener('click', () => {
//     selectMode.selectedMode()})

// header container 2
const playerSelection = () => {
    const playerX = document.querySelector('.player--x');
    const playerO = document.querySelector('.player--o');
    
}


function displayCurrentPlayerTurn() {
    const headerChoiceText = document.querySelector('.header__choice-text');
}

function updateScore() {
    const playerXScore = document.querySelector('.player__score--x');
    const playerOScore = document.querySelector('.player__score--o');

}
// header container 3
// restart game 
function restartGame() {
    const restart = document.querySelector('.restart');

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

const gameBoard = (() => {
    const _board = new Array(9)

    
})()

const miniMax = (() => {
    
})()

// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    console.log(footer)
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()