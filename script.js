// function restartGame() { // work in progresss...
//     const restart = document.querySelector('.restart');
// }
// // table for animation effect when losing or winning
// const table = document.querySelector('.table');
// // main section
// const mainSection = document.querySelector('.section-main');


// let arrayTest = ['o','x','x','x','x','o','o','o','x']
let draw = ['x','o','x','x','o','x','o','x','o'];

// let topHorizontal = ['_','_','_','_','_','_','x','x','x'];
// let middleHorizontal = ['','','','x','x','x','','',''];
// let bottomHorizontal = ['x','x','x','','','','','',''];

// let leftVertical = ['x','','','x','','','x','',''];
// let middleVertical = ['','x','','','x','','','x',''];
// let rightVertical = ['','','x','','','x','','','x'];

// let backslashDiagonal = ['','','x','','x','','x','',''];
// let frowardslashDiagonal = ['x','','','','x','','','','x']

// console.log(checkWin(draw, 'x'))

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
            case "x": // 1 img tag, 1 span tag
                _headerChoiceText.textContent = '';
                _addImage( "./img/x-lg-svgrepo-com.svg", "X-img" );
                _addSpanText("Turn");
                break;
            case "o": // 1 img tag, 1 span tag
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
        if( turn === "x" ) {
            _playerX.classList.add("selected-player");
            _playerO.classList.remove("selected-player");
        } else if( turn === "o" ) {
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

    const displaySign = (playerTurn, element) => { // display either x or circle in .table__data on click
        // const tableData = document.querySelectorAll('.table__data');
    
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
    
        // tableData.forEach(element => {
        //     element.addEventListener('click', () => {
        //         if( element.childElementCount === 0 ) {
        //             if( playerTurn === "x" ) {
        //                 _createExDiv(element);
        //                 console.log("WORKS");
        //             } else if( playerTurn === "o" ) {
        //                 _createCircleDiv(element);
        //                 console.log("WORKSSSS");
        //             } else {
        //                 console.log("WRONG INPUT within displaySign()");
        //             }
        //         }
        //     });
        // });
        if( element.childElementCount === 0 ) {
            if( playerTurn == 'x' ) {
                _createExDiv(element);
            } else if( playerTurn == 'o' ) {
                _createCircleDiv(element);
            } else {
                console.log("WRONG INPUT within displaySign()");
            }
        }   
    }

    return {
        displayCurrentPlayerText,
        displayCurrentPlayerBorder,
        updateScore,
        displaySign,
    }
})();

const gameController = (() => {
    // header selectors
    // header container 1
    // const gameMode = (() => { // return a string of selected mode from the dropdown selection
    //     const mode = document.getElementById('mode');
    //     let _defaultMode = 'easy';
    //     let _finalMode;

    //     const selectedMode = () => {
    //         mode.addEventListener('change', changeMode)
    //         function changeMode() {
    //             _defaultMode = mode.value;
    //         }
    //         if(_finalMode === undefined) {
    //             return _defaultMode;
    //         } 
    //         else {
    //             return _finalMode = _defaultMode;
    //         }
    //     }

    //     return {
    //         selectedMode,
    //     }
    // })();

    const gameMode = (() => { // return a string of selected mode from the dropdown selection
        const mode = document.getElementById('mode');
        let _finalMode;
    
        mode.addEventListener('change', changeMode)
        function changeMode() {
            _finalMode = mode.value;
        }
    
        const selectedMode = () => {
            return _finalMode;
        }
    
        return {
            selectedMode,
        }
    })();

    // header container 2
    const playerSelection = (() => { // return the string of player 1 sign, either X or O based on the div clicked
        const _playerX = document.querySelector('.player--x');
        const _playerO = document.querySelector('.player--o');

        let _playerChoice = 'x';

        _playerX.addEventListener('click', () => {
            _playerChoice = 'x';
        })

        _playerO.addEventListener('click', () => {
            _playerChoice = 'o';
        })

        const playerSign = () => {
            return _playerChoice;
        }  

        return {
            playerSign,
        }
    })();

    const checkWin = ( board, mark ) => { // check if any player has won or a draw
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

    const checkBoardIsFull = ( board ) => {
        for(let i = 0; i < board.length; i++ ) {
            if(board[i] == '_') {
                return false;
            } 
        } return true;
    }    

    const evaluateBoard = ( board, player, ai ) => {
        if( checkWin( board, player )) {
            return 10
        } 
        if( checkWin( board, ai )) {
            return -10
        }
    }

    const miniMax = (board, depth, isMax) => { // work in progress... ai for difficulties
        let score = evaluateBoard(board, player, ai);
    
        if( score == 10 ) {
            return score;
        } 
        if( score == -10 ) {
            return score;
        }
        if( checkBoardIsFull( board ) == true ) {
            return 0;
        }
        if( isMax ) { // if maximizer's move
            let best = -Infinity; 
            for( let i = 0; i < board.length; i++ ) { // traverse the board
                if( board[i] == '_' ) {
                    board[i] = player;
                    best = Math.max(best, miniMax(board, depth + 1, !isMax));
                    board[i] = '_';
                }
            }
            return best;
        } else {
            let best = Infinity;
            for(let i = 0; i < board.length; i++) {
                if(board[i] == '_') {
                    board[i] = ai;
                    best = Math.min(best, miniMax(board, depth + 1, !isMax));
                    board[i] = "_"
                }
            }
            return best;
        }
    }

    const findBestMove = ( board ) => {
        let bestScore = -Infinity;
        let bestMove;

        for(let i = 0; i < board.length; i++) {
            if(board[i] == '_') { // is the spot available
                // find best move
                board[i] = player;
                let score = miniMax(board, 0, false);
                board[i] = '';
                if( score > bestScore ) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        return bestMove;
    }

    return {
        gameMode, 
        playerSelection,
        checkWin,
        checkBoardIsFull,
        miniMax,
        findBestMove,
    }
})();



function game() { // work in progress... where all the functionalities should reside...
    const playersDiv = document.querySelectorAll('.player');
    const modeDiv = document.getElementById('mode');
    const tableData = document.querySelectorAll('.table__data');

    let theBoard = ['_','_','_','_','_','_','_','_','_'];
    
    let currentMode = 'easy';
    let playerTurn = 'x';

    let gameOn = false;
    let move = {}

    let player1 = 'x'; // human
    let player2 = 'o'; // ai or human_2

    // if game on: i.e. x makes a move     
    // player selection cannot occur

    // Mode can be changed throughout the game, when changed score stays the same, but board is erased, 
    // Mode changed to 2 player restarts the game completely

    // retarts erases the board, but not the score

    // on every start of the game in all mode except "2 players" mode, the player has the option to change MODE and SIGN 
    modeDiv.addEventListener('change', () => { // listen for mode change and modify currentMode accordingly
        currentMode = gameController.gameMode.selectedMode();
        gameOn = false;
        // erase board back to default
        // console.log("this is now the current mode: ", currentMode)
    })
    
    displayController.displayCurrentPlayerText(); // default text for .header__choice-text
    displayController.displayCurrentPlayerBorder('x'); // default selected player css

    playersDiv.forEach( elem => { // assign players based on click on either .player--x or .player--o except for 2 players mode
        elem.addEventListener('click', () => {
            if( currentMode !== '2_players') {
                while( !gameOn ) {
                    if(gameController.playerSelection.playerSign() == 'x') {
                        player1 = 'x';
                        player2 = 'o';
                        break
                    } else if(gameController.playerSelection.playerSign() == 'o') {
                        player1 = 'o'; 
                        player2 = 'x';
                        displayController.displayCurrentPlayerText('x');
                        gameOn = true;
                        break
                    }
                    console.log(player1, player2)
                }
            }
        })
    })

    // on click to change player from 'x' to 'o', automatically pick and choose board to display x 

    // if mode is easy, medium, or impossible, use an AI

    if( gameController.checkWin(theBoard, 'x') === true || gameController.checkWin(theBoard, 'o') === true ) {
        console.log('game over')
        gameOn = false
    }

    tableData.forEach( el => { // work in progress
        el.addEventListener('click', () => {
            // console.log(el)
            if(!gameController.checkWin(theBoard, 'x') || !gameController.checkWin(theBoard, 'o')) {
                gameOn = true;
            } 

            if( gameController.checkWin(theBoard, 'x') === true || gameController.checkWin(theBoard, 'o') === true ) {
                console.log('game over')
                gameOn = false
            }

            // console.log(playerTurn)
            if( gameOn == true ) {
                if( el.childElementCount === 0 ) { // if the current element has 0 child, i.e. no sign has been displayed then add the sign
                    if( playerTurn == 'x' ) {
                        displayController.displaySign('x', el);
                        playerTurn = 'o';
                        console.log(el.dataset.table)
                        theBoard[el.dataset.table] = 'x';
                        console.log(theBoard)
                        if( gameController.checkWin(theBoard, 'x') === true || gameController.checkWin(theBoard, 'o') === true ) {
                            console.log('game over')
                            gameOn = false
                            displayController.displayCurrentPlayerText('over');
                        } else {
                            displayController.displayCurrentPlayerText(playerTurn);
                            displayController.displayCurrentPlayerBorder(playerTurn);
                        }
                    } else if( playerTurn == 'o') {
                        displayController.displaySign('o', el);
                        playerTurn = 'x';
                        theBoard[el.dataset.table] = 'o';
                        console.log(el.dataset.table)
                        console.log(theBoard)
                        if( gameController.checkWin(theBoard, 'x') === true || gameController.checkWin(theBoard, 'o') === true ) {
                            console.log('game over')
                            gameOn = false
                            displayController.displayCurrentPlayerText('over');
                        } else {
                            displayController.displayCurrentPlayerText(playerTurn);
                            displayController.displayCurrentPlayerBorder(playerTurn);
                        }
                    }
                } 

            }
        })
    })

    
}
game();


// footer script
function addDynamicFooterDate() { // update footer string representing the current year based on current date
    const footer = document.querySelector('.footer__year');
    let year = new Date().getFullYear();
    footer.textContent = year;
}
addDynamicFooterDate();

