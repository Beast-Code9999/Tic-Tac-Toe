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

function displayCurrentPlayerText(state) { // This will be stored within displayController... Dynamically change .header__choice-text to appropirate game state
    const headerChoiceText = document.querySelector('.header__choice-text');
    const _img = document.createElement('img');
    const _span = document.createElement('span');

    function _helperSetAttribute( el, attributes ) { // helper fuction to set multiple attributes to an element
        for( let key in attributes ) {
            el.setAttribute(key, attributes[key]) // key : value pair within an object of attributes and its value
        }
    }

    function _addSpanText(message) {
        headerChoiceText.appendChild(_span);
        _span.textContent = `${message}`;
        _helperSetAttribute( _span, {
            "class": "header__span",
        })
    }

    function _addImage( src, alt ) {
        headerChoiceText.appendChild(_img);
        _helperSetAttribute( _img, {
            "src": `${src}`, //"./img/x-lg-svgrepo-com.svg",
            "class": "header__img--small",
            "alt": `${alt}`, //"X-img",
        })
    }
    
    switch( state ) {
        case "playerX": // 1 img tag, 1 span tag
            headerChoiceText.textContent = '';
            _addImage( "./img/x-lg-svgrepo-com.svg", "X-img" );
            _addSpanText("Turn");
            break;
        case "playerO": // 1 img tag, 1 span tag
            headerChoiceText.textContent = '';
            _addImage( "./img/circle-svgrepo-com.svg", "O-img" )
            _addSpanText("Turn");
            break;
        case "over":    // single text block element
            headerChoiceText.textContent = '';
            _addSpanText("Game Over") 
            break;
        default:        // single text block element
            headerChoiceText.textContent = '';
            _addSpanText("start or select player") 
    }
}

// let num;
// window.addEventListener('click', () => {
//     num = Math.floor(Math.random() * 4);
//     if( num === 0 ) {
//         displayCurrentPlayerText('playerO')
//     }
//     else if( num === 1) {
//         displayCurrentPlayerText('playerX')
//     }
//     else if( num === 2) {
//         displayCurrentPlayerText('over')
//     }
//     else if( num === 3) {
//         displayCurrentPlayerText()
//     }
// })

function displayCurrentPlayerBorder(turn) { // dynamically add .selected-player css to either player div 
    const _playerX = document.querySelector('.player--x');
    const _playerO = document.querySelector('.player--o');
    if( turn === "playerX" ) {
        _playerX.classList.add("selected-player");
        _playerO.classList.remove("selected-player");
    } else if( turn === "playerO" ) {
        _playerX.classList.remove("selected-player");
        _playerO.classList.add("selected-player");
    } else {
        console.log("WRONG PLAYER INPUT in displayCurrentPLayerBorder()")
    }
}

// displayCurrentPlayerBorder('playerXx')

function updateScore( xScore, oScore ) { // work in progress...
    const playerXScore = document.querySelector('.player__score--x');
    const playerOScore = document.querySelector('.player__score--o');

    if( typeof xScore === 'number' && typeof oScore === 'number' ) {
        playerXScore.textContent = `${xScore}`
        playerOScore.textContent = `${oScore}`
    } 
    else {
        console.log("WRONG INPUT ON updateScore()")
    }
}
// updateScore(1, 0)

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
