// header selectors
// header container 1
const selectMode = (() => { // return a string of selected mode from the dropdown selection
    const mode = document.getElementById('mode');

    let _defaultMode = 'easy';
    let _finalMode;

    const selectedMode = () => {
        mode.addEventListener('change', changeMode)
        function changeMode() {
            _defaultMode = mode.value
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
const playerSelection = (() => { // work in progress...
    const _playerX = document.querySelector('.player--x');
    const _playerO = document.querySelector('.player--o');

    let playerChoice;

    _playerX.addEventListener('click', () => {
        playerChoice = 'playerX'
    })

    _playerO.addEventListener('click', () => {
        playerChoice = 'playerO'
    })
    // let _choice = '';

    const choosePlayer = () => {
        return playerChoice
    }  

    return {
        choosePlayer,
    }
})();

window.addEventListener('click', () => {
    console.log(playerSelection.choosePlayer())
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

const miniMax = (() => {
    
})();

const gameBoard = (() => {
    const _board = new Array(9)

    
})();

const displayController = (() => {

})();


// footer script
function addDynamicFooterDate() {
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()
