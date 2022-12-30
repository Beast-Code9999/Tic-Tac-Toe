// header selectors
// header container 1
const selectMode = (() => { // return a string of selected mode from the dropdown selection
    const mode = document.getElementById('mode');

    let _defaultMode = 'easy';
    let _finalMode;

    const selectedMode = () => {
        mode.addEventListener('change', changeMode)
        function changeMode() {
            _defaultMode = mode.value;
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
const playerSelection = (() => { // return the string of player 1 sign, either X or O based on the div clicked
    const _playerX = document.querySelector('.player--x');
    const _playerO = document.querySelector('.player--o');

    let _playerChoice = 'playerX';

    _playerX.addEventListener('click', () => {
        _playerChoice = 'playerX';
    })

    _playerO.addEventListener('click', () => {
        _playerChoice = 'playerO';
    })

    const choosePlayer = () => {
        return _playerChoice;
    }  

    return {
        choosePlayer,
    }
})();

// window.addEventListener('click', () => {
//     console.log(playerSelection.choosePlayer())
// })

function displayCurrentPlayerTurn(state) { // work in progress... This will be stored within displayController
    // message is eihther:
    // start or select player
    // O turn
    // X turn
    // Game over
    const img = document.createElement('img');
    const span = document.createElement('span');

    function _helperSetAttribute( el, attributes ) { // helper fuction to set multiple attributes to an element
        for( let key in attributes ) {
            el.setAttribute(key, attributes[key]) // key : value pair within an object
        }
    }

    const headerChoiceText = document.querySelector('.header__choice-text');
    
    switch( state ) {
        case "playerX": // 1 img tag, 1 span tag
            headerChoiceText.textContent = '';
            headerChoiceText.appendChild(img);
            _helperSetAttribute( img, {
                "src": "./img/x-lg-svgrepo-com.svg",
                "class": "header__img--small",
            })
            headerChoiceText.appendChild(span)
            // console.log(img)
            break;
        case "playerO":
            headerChoiceText.textContent = 'player OOO turn'; // 1 img tag, 1 span tag
            break;
        case "over": 
            headerChoiceText.textContent = 'Game Over'; // single text block element
            break;
        default:
            headerChoiceText.textContent = 'start of select player' // single text block element
    }

    // headerChoiceText.textContent = "player xxx turn";

    // headerChoiceText.textContent = `${}`
}
displayCurrentPlayerTurn('playerX')

function updateScore() { // work in progress...
    const playerXScore = document.querySelector('.player__score--x');
    const playerOScore = document.querySelector('.player__score--o');

}
// header container 3
// restart game 
function restartGame() { // work in progresss...
    const restart = document.querySelector('.restart');

}
// table for animation effect when losing or winning
const table = document.querySelector('.table');
// main section
const mainSection = document.querySelector('.section-main');

const displaySign = () => { // work in progress...
    const tableData = document.querySelectorAll('.table__data')
    tableData.forEach(element => {
        element.addEventListener('click', addSign)
    });

    function addSign() {
        
    }
}

const miniMax = (() => { // work in progress... ai for difficulties
    
})();

const gameBoard = (() => { // work in progress... where the board object will be stored
    const _board = new Array(9)

    
})();

const displayController = (() => { // work in progress... display all the necessary pieces

})();


function game() { // work in progress... where all the functionalities should reside...

}
game();

// footer script
function addDynamicFooterDate() { // update footer string representing the current year based on current date
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear()
    footer.textContent = year;
}
addDynamicFooterDate()
