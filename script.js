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


function restartGame() { // work in progresss...
    const restart = document.querySelector('.restart');

}
// table for animation effect when losing or winning
const table = document.querySelector('.table');
// main section
const mainSection = document.querySelector('.section-main');


function checkWin( board, mark ) {
    return (
        ((board[6] === mark) && (board[7] === mark) && (board[8] === mark)) || // top horizontal 
        ((board[3] === mark) && (board[4] === mark) && (board[5] === mark)) || // middle horizontal
        ((board[0] === mark) && (board[1] === mark) && (board[2] === mark)) || // bottom horizontal
        ((board[6] === mark) && (board[3] === mark) && (board[0] === mark)) || // left vertical
        ((board[7] === mark) && (board[4] === mark) && (board[1] === mark)) || // middle vertical
        ((board[8] === mark) && (board[5] === mark) && (board[2] === mark)) || // right vertical
        ((board[6] === mark) && (board[4] === mark) && (board[2] === mark)) || // backslash diagonal
        ((board[8] === mark) && (board[4] === mark) && (board[0] === mark))    // forwardslash diagonal
    )
}

// let arrayTest = ['o','x','x','x','x','o','o','o','x']
let draw = ['x','o','x','x','o','x','o','x','o'];

let topHorizontal = ['_','_','_','_','_','_','x','x','x'];
// let middleHorizontal = ['','','','x','x','x','','',''];
// let bottomHorizontal = ['x','x','x','','','','','',''];

// let leftVertical = ['x','','','x','','','x','',''];
// let middleVertical = ['','x','','','x','','','x',''];
// let rightVertical = ['','','x','','','x','','','x'];

// let backslashDiagonal = ['','','x','','x','','x','',''];
// let frowardslashDiagonal = ['x','','','','x','','','','x']

// console.log(checkWin(draw, 'x'))

function checkBoardIsFull( board ) {
    for(let i = 0; i < board.length; i++ ) {
        if(board[i] == '_') {
            return false;
        } 
    } return true;
}
// console.log( checkBoardIsFull(draw) )

function evaluateBoard( board, aiPlayer, humanPlayer ) { // return a 10 if ai won or -10 if human won or 0 if draw
    let ai = aiPlayer;
    let human = humanPlayer;

    if( checkWin( board, ai ) ) {
        return 10;
    } else if( checkWin( board, human ) ) {
        return -10;
    } else {
        return 0;
    }
}

// console.log(evaluateBoard( topHorizontal, 'o', 'x'))


const miniMax = (board, depth, isMax) => { // work in progress... ai for difficulties
    let score = evaluateBoard(board);

    if( score == 10 ) {
        return score;
    } 
    if( score == -10 ) {
        return score;
    }
    if( checkBoardIsFull == true ) {
        return 0;
    }
    if( isMax ) { // if maximizer's move
        let best = -1000; 

        for( let i = 0; i < board.length; i++ ) { // traverse the board
            if( board[i] == '_' ) {
                board[i] = player;
                best = Math.max(best, miniMax(board, depth + 1, !isMax));
                board[i] = '_';
            }
        }
        return best;
    } else {
        let best = 1000;

        for(let i = 0; i < board.length; i++) {
            if(board[i] == '_') {
                board[i] = ai;
                best = Math.min(best, miniMax(board, depth + 1, !isMax));
                board[i] = "_"
            }
        }
        return best;
    }
};

function findBestMove( board ) {
    for(let i = 0; i < board.length; i++) {
        if(board[i] == '_') {

        }
    }
}

const gameBoard = (() => { // work in progress... where the board object will be stored
    const _board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];

})();

const displayController = (() => { // work in progress... display all the necessary pieces
    const displayCurrentPlayerText = (state) => { // This will be stored within displayController... Dynamically change .header__choice-text to appropirate game state
        const _headerChoiceText = document.querySelector('.header__choice-text');
        const _img = document.createElement('img');
        const _span = document.createElement('span');
    
        function _helperSetAttribute( el, attributes ) { // helper fuction to set multiple attributes to an element
            for( let key in attributes ) {
                el.setAttribute(key, attributes[key]); // key : value pair within an object of attributes and its value
            }
        }
    
        function _addSpanText(message) {
            _headerChoiceText.appendChild(_span);
            _span.textContent = `${message}`;
            _helperSetAttribute( _span, {
                "class": "header__span",
            })
        }
    
        function _addImage( src, alt ) {
            _headerChoiceText.appendChild(_img);
            _helperSetAttribute( _img, {
                "src": `${src}`, //"./img/x-lg-svgrepo-com.svg",
                "class": "header__img--small",
                "alt": `${alt}`, //"X-img",
            })
        }
        
        switch( state ) {
            case "playerX": // 1 img tag, 1 span tag
                _headerChoiceText.textContent = '';
                _addImage( "./img/x-lg-svgrepo-com.svg", "X-img" );
                _addSpanText("Turn");
                break;
            case "playerO": // 1 img tag, 1 span tag
                _headerChoiceText.textContent = '';
                _addImage( "./img/circle-svgrepo-com.svg", "O-img" );
                _addSpanText("Turn");
                break;
            case "over":    // single text block element
                _headerChoiceText.textContent = '';
                _addSpanText("Game Over");
                break;
            default:        // single text block element
                _headerChoiceText.textContent = '';
                _addSpanText("start or select player");
        }
    }

    const displayCurrentPlayerBorder = (turn) => { // dynamically add .selected-player css to either player div 
        const _playerX = document.querySelector('.player--x');
        const _playerO = document.querySelector('.player--o');
        if( turn === "playerX" ) {
            _playerX.classList.add("selected-player");
            _playerO.classList.remove("selected-player");
        } else if( turn === "playerO" ) {
            _playerX.classList.remove("selected-player");
            _playerO.classList.add("selected-player");
        } else {
            console.log("WRONG PLAYER INPUT in displayCurrentPLayerBorder()");
        }
    }

    const updateScore = ( xScore, oScore ) => { // update the score of each player
        const _playerXScore = document.querySelector('.player__score--x');
        const _playerOScore = document.querySelector('.player__score--o');
    
        if( typeof xScore === 'number' && typeof oScore === 'number' ) {
            _playerXScore.textContent = `${xScore}`;
            _playerOScore.textContent = `${oScore}`;
        } 
        else {
            console.log("WRONG INPUT ON updateScore()");
        }
    }

    const displaySign = (playerTurn) => { // display either x or circle in .table__data on click
        const tableData = document.querySelectorAll('.table__data');
    
        function _createCircleDiv( el ) {
            const circle = document.createElement('div');
            const circleContainer = document.createElement('div');
            const circleOuter = document.createElement('div');
            const circleInner = document.createElement('div');
            const boxTopLeft = document.createElement('div');
            const boxBottomLeft = document.createElement('div');
            const boxBottomRight = document.createElement('div');
            const boxTopRight = document.createElement('div');
    
            circle.classList.add('circle');
            circleContainer.classList.add('circle__container');
            circleOuter.classList.add('circle__outer');
            circleInner.classList.add('circle__inner');
            boxTopLeft.classList.add('box', 'box-top-left');
            boxBottomLeft.classList.add('box', 'box-bottom-left');
            boxBottomRight.classList.add('box', 'box-bottom-right');
            boxTopRight.classList.add('box', 'box-top-right');
    
            circle.appendChild(circleContainer);
            circleContainer.append(circleOuter, circleInner, boxTopLeft, boxBottomLeft, boxBottomRight, boxTopRight);
    
            el.appendChild(circle);
        }
    
        function _createExDiv( el ) {
            const ex = document.createElement('div');
            const exContainer = document.createElement('div');
            const exLeft = document.createElement('div');
            const exRight = document.createElement('div');
    
            ex.classList.add('ex');
            exContainer.classList.add('ex__container');
            exLeft.classList.add('ex__left');
            exRight.classList.add('ex__right');
    
            ex.appendChild(exContainer);
            exContainer.append(exLeft, exRight);
    
            el.appendChild(ex);
        }
    
        tableData.forEach(element => {
            element.addEventListener('click', () => {
                if( element.childElementCount === 0 ) {
                    if( playerTurn === "playerX" ) {
                        _createExDiv(element);
                        console.log("WORKS");
                    } else if( playerTurn === "playerO" ) {
                        _createCircleDiv(element);
                        console.log("WORKS");
                    } else {
                        console.log("WRONG INPUT within displaySign()");
                    }
                }
            });
        });
    }

    return {
        displayCurrentPlayerText,
        displayCurrentPlayerBorder,
        updateScore,
        displaySign,
    }
})();


function game() { // work in progress... where all the functionalities should reside...

}
game();

// footer script
function addDynamicFooterDate() { // update footer string representing the current year based on current date
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear();
    footer.textContent = year;
}
addDynamicFooterDate();

