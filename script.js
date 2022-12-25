// header selectors
// header container 1
const selectMode = (() => { // work in progress...
    const mode = document.getElementById('mode');
    // console.log(mode.options[mode.selectedIndex].value)
    // console.log(mode.value)
    let defaultMode = 'easy';
    let finalMode;

    const selectedMode = () => {
        mode.addEventListener('change', changeMode)
        function changeMode() {
            defaultMode = mode.value

            // console.log(defaultMode)
            // console.log(mode.value)
        }
        if(finalMode === undefined) {
            return defaultMode;
        } 
        else {
            return finalMode = defaultMode;
        }
    }
    

    return {
        selectedMode,
    }
})();
window.addEventListener('click', () => {
    console.log(    selectMode.selectedMode()      )
        }
    )

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
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()
