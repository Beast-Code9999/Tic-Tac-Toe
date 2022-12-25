// header selectors
// header container 1
const selectMode = (() => { // return a string of selected mode from the dropdown selection
    const mode = document.getElementById('mode');
    // console.log(mode.options[mode.selectedIndex].value)
    // console.log(mode.value)
    let _defaultMode = 'easy';
    let _finalMode;

    const selectedMode = () => {
        mode.addEventListener('change', changeMode)
        function changeMode() {
            _defaultMode = mode.value

            // console.log(_defaultMode)
            // console.log(mode.value)
        }
        if(_finalMode === undefined) {
            return _defaultMode;
        } 
        else {
            return _finalMode = _defaultMode;
        }
    }

    return {
        selectedMode,
    }
})();

// window.addEventListener('click', () => {
//     console.log(    selectMode.selectedMode()      )
//         }
//     )

// header container 2
const playerSelection = () => { // in progress...
    const playerX = document.querySelector('.player--x');
    const playerO = document.querySelector('.player--o');

    let _choice = '';

    const choosePlayer = () => {
        window.addEventListener('click', _checkPlayerChoice)


        // return _choice;
    }

    const _checkPlayerChoice = () => {
        console.log('hello')
    }

    const _modifyPlayerChoice = (choice) => {
        _choice = choice
    }

    return {
        choosePlayer,
    }
}

window.addEventListener('click', () => {
    console.log(playerSelection().choosePlayer())
})

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

    
})();

const displayController = (() => {

})();

const miniMax = (() => {
    
})();

// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()
