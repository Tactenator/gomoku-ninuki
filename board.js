document.addEventListener('DOMContentLoaded', (e) => {


    /**
     * ************BOARD************
     */

    const leftDiagonalWins = 
    [['a1', 'b2', 'c3', 'd4', 'e5'], 
     ['a2', 'b3', 'c4', 'd5', 'e6'],
     ['a3', 'b4', 'c5', 'd6', 'e7'],
     ['a4', 'b5', 'c6', 'd7', 'e8'],
     ['a5', 'b6', 'c7', 'd8', 'e9'],
     ['a6', 'b7', 'c8', 'd9', 'e10'],
     ['b1', 'c2', 'd3', 'e4', 'f5'],
     ['b2', 'c3', 'd4', 'e5', 'f6'],
     ['b3', 'c4', 'd5', 'e6', 'f7'],
     ['b4', 'c5', 'd6', 'e7', 'f8'],
     ['b5', 'c6', 'd7', 'e8', 'f9'],
     ['b6', 'c7', 'd8', 'e9', 'f10'],
     ['c1', 'd2', 'e3', 'f4', 'g5'],
     ['c2', 'd3', 'e4', 'f5', 'g6'],
     ['c3', 'd4', 'e5', 'f6', 'g7'],
     ['c4', 'd5', 'e6', 'f7', 'g8'],
     ['c5', 'd6', 'e7', 'f8', 'g9'],
     ['c6', 'd7', 'e8', 'f9', 'g10'],
     ['d1', 'e2', 'f3', 'g4', 'h5'],
     ['d2', 'e3', 'f4', 'g5', 'h6'],
     ['d3', 'e4', 'f5', 'g6', 'h7'],
     ['d4', 'e5', 'f6', 'g7', 'h8'],
     ['d5', 'e6', 'f7', 'g8', 'h9'],
     ['d6', 'e7', 'f8', 'g9', 'h10'],
     ['e1', 'f2', 'g3', 'h4', 'i5'],
     ['e2', 'f3', 'g4', 'h5', 'i6'],
     ['e3', 'f4', 'g5', 'h6', 'i7'],
     ['e4', 'f5', 'g6', 'h7', 'i8'],
     ['e5', 'f6', 'g7', 'h8', 'i9'],
     ['e6', 'f7', 'g8', 'h9', 'i10'],
     ['f1', 'g2', 'h3', 'i4', 'j5'],
     ['f2', 'g3', 'h4', 'i5', 'j6'],
     ['f3', 'g4', 'h5', 'i6', 'j7'],
     ['f4', 'g5', 'h6', 'i7', 'j8'],
     ['f5', 'g6', 'h7', 'i8', 'j9'],
     ['f6', 'g7', 'h8', 'i9', 'j10']
    ]

    const rightDiagonalWins = 
    [['a10', 'b9', 'c8', 'd7', 'e6'], 
     ['a9', 'b8', 'c7', 'd6', 'e5'],
     ['a8', 'b7', 'c6', 'd5', 'e4'],
     ['a7', 'b6', 'c5', 'd4', 'e3'],
     ['a6', 'b5', 'c4', 'd3', 'e2'],
     ['a5', 'b4', 'c3', 'd2', 'e1'],
     ['b10', 'c9', 'd8', 'e7', 'f6'],
     ['b9', 'c8', 'd7', 'e6', 'f5'],
     ['b8', 'c7', 'd6', 'e5', 'f4'],
     ['b7', 'c6', 'd5', 'e4', 'f3'],
     ['b6', 'c5', 'd4', 'e3', 'f2'],
     ['b5', 'c4', 'd3', 'e2', 'f1'],
     ['c10', 'd9', 'e8', 'f7', 'g6'],
     ['c9', 'd8', 'e7', 'f6', 'g5'],
     ['c8', 'd7', 'e6', 'f5', 'g4'],
     ['c7', 'd6', 'e5', 'f4', 'g3'],
     ['c6', 'd5', 'e4', 'f3', 'g2'],
     ['c5', 'd4', 'e3', 'f2', 'g1'],
     ['d10', 'e9', 'f8', 'g7', 'h6'],
     ['d9', 'e8', 'f7', 'g6', 'h5'],
     ['d8', 'e7', 'f6', 'g5', 'h4'],
     ['d7', 'e6', 'f5', 'g4', 'h3'],
     ['d6', 'e5', 'f4', 'g3', 'h2'],
     ['d5', 'e4', 'f3', 'g2', 'h1'],
     ['e10', 'f9', 'g8', 'h7', 'i6'],
     ['e9', 'f8', 'g7', 'h6', 'i5'],
     ['e8', 'f7', 'g6', 'h5', 'i4'],
     ['e7', 'f6', 'g5', 'h4', 'i3'],
     ['e6', 'f5', 'g4', 'h3', 'i2'],
     ['e5', 'f4', 'g3', 'h2', 'i1'],
     ['f10', 'g9', 'h8', 'i7', 'j6'],
     ['f9', 'g8', 'h7', 'i6', 'j5'],
     ['f8', 'g7', 'h6', 'i5', 'j4'],
     ['f7', 'g6', 'h5', 'i4', 'j3'],
     ['f6', 'g5', 'h4', 'i3', 'j2'],
     ['f5', 'g4', 'h3', 'i2', 'j1']
    ]

    const newGameButton = document.querySelector('.new-game')
    const gameBoard = document.querySelector('.gameBoard')
    const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let isBlacksTurn = true; 

    newGameButton.addEventListener('click', () => {
       let gameBoardChildren = document.querySelectorAll('.gameBoard > div'); 
       gameBoardChildren.forEach(child => {
        child.remove()
       })
       isBlacksTurn = true; 
       handleTurn()
       createBoard(9)
    })
    

    //initializes board
    function createBoard(e) {
        console.log(e)
        for(let i = 0; i < e; i++) {
            for(let j = 0; j < e; j++) {
                //creates new square and adds row value + square value.
                const newSquare = document.createElement('div')
                newSquare.setAttribute('row-id', lettersArr[i])
                newSquare.setAttribute('square-value', j + 1); 
                newSquare.classList.add('gameSquare'); 
                //appends new square to board
                gameBoard.append(newSquare)
            }
        }
        createCorners()
    }

    //creates corners; places where the player can actually set stones.
    function createCorners () {
        const spaces = document.querySelectorAll('.gameSquare')
        for(let i = 0; i < spaces.length; i++) {
            const rowId = spaces[i].getAttribute('row-id')
            const squareValue = parseInt(spaces[i].getAttribute('square-value'))
            const topLeft = document.createElement('div')
            
            topLeft.classList.add('topLeft')
            spaces[i].append(topLeft)
            topLeft.setAttribute('location', topLeft.parentElement.getAttribute('row-id') + squareValue)
            if(squareValue === 9) {
                const topRight = document.createElement('div')
                topRight.classList.add('topRight')
                spaces[i].append(topRight)
                topRight.setAttribute('location', topRight.parentElement.getAttribute('row-id') + (squareValue + 1) )
            }
            if(rowId === 'i') {
                const bottomLeft = document.createElement('div')
                bottomLeft.classList.add('bottomLeft')
                spaces[i].append(bottomLeft)
                if(squareValue === 9) {
                    const bottomRight = document.createElement('div')
                    bottomRight.classList.add('bottomRight')
                    spaces[i].append(bottomRight)
                    bottomRight.setAttribute('location', lettersArr[lettersArr.length - 1] + (squareValue + 1))
                }
                bottomLeft.setAttribute('location', lettersArr[lettersArr.length - 1] + squareValue)
            }
            
        }
        
        addLocationActivity(spaces)
    }

    /****************** GAMEPLAY  **************/

    handleTurn()

    const blackStonesRow = []
    const blackStonesColumn = []
    const whiteStonesRow = []
    const whiteStonesColumn = []

    let stoneRow, stoneColumn

    const stone = {
        height: '25px',
        width: '25px', 
        radius: '50%', 
        
    }

    function addLocationActivity(e) {
        const spacesArr = Array.from(e)
        spacesArr.forEach(space => {
            const children = Array.from(space.children); 
            children.forEach(child => {
                child.addEventListener('click', (e => {
                    const targetDiv = e.target;
                    const newStone = document.createElement('div')
                    newStone.style.height = stone.height; 
                    newStone.style.width = stone.width; 
                    newStone.style.borderRadius = stone.radius; 
                    if(isBlacksTurn) {
                        isBlacksTurn = false
                        newStone.style.backgroundColor = 'black'       
                        newStone.setAttribute('player', 'black')  
                        stoneRow = targetDiv.parentElement.getAttribute('row-id') 
                        stoneColumn = targetDiv.parentElement.getAttribute('square-value')     
                        blackStonesRow.push(stoneRow)
                        blackStonesColumn.push(stoneColumn)
                    }
                    else {
                        isBlacksTurn = true; 
                        newStone.style.backgroundColor = 'white'
                        newStone.setAttribute('player', 'white')
                        stoneRow = targetDiv.parentElement.getAttribute('row-id') 
                        stoneColumn = targetDiv.parentElement.getAttribute('square-value')     
                        whiteStonesRow.push(stoneRow)
                        whiteStonesColumn.push(stoneColumn)
                    }
                    targetDiv.style.pointerEvents = "none";
                    targetDiv.append(newStone)
                    handleTurn()
                    checkWin(stoneRow, stoneColumn)
                }))
            })
        }) 
    }

    function handleTurn() {
        const whosTurn = document.querySelector('.playerTurn')
        if(isBlacksTurn) {
            whosTurn.innerHTML = "It is Black's turn."
        }
        else{
            whosTurn.innerHTML = "It is White's turn."
        }
    }

    function checkWin(stoneRow, stoneColumn) {
        if(!isBlacksTurn){
            checkRowWin('row', stoneRow, 'black')
            checkRowWin('col', stoneColumn, 'black')   
            checkLeftDiagonalWin('black')
            checkRightDiagonalWin('black')
        }
        else {

            checkRowWin('row', stoneRow, 'white')
            checkRowWin('col', stoneColumn, 'white')
            checkLeftDiagonalWin('white')
            checkRightDiagonalWin('white')
        }
    }

    function checkRowWin(type, file, val) {
        let count = 0;
        let stonesArr = [];
        let stones = type === 'row' ? document.querySelectorAll(`div[row-id=${file}] > .topLeft`) : 
        document.querySelectorAll(`div[square-value="${file}"] > .topLeft`)
        stones.forEach((ele) => {
            if(ele.children.length === 0) {
                stonesArr.push('')
            }
            else {
                let childAttribute = ele.children[0].getAttribute('player')
                stonesArr.push(childAttribute)
            }
        })
        stonesArr.forEach((stone) => {
            if(stone === val) { 
                count++ 
                console.log(count ===5)
                if(count === 5){
                    console.log(`${val} wins!`)
                    return true; 
                }
            } 
            else {
                count = 0; 
            }
        })
    }

    function checkLeftDiagonalWin(player) {
        let count = 0; 
        for(let i = 0; i < leftDiagonalWins.length; i++) {
            for(let j = 0; j < leftDiagonalWins[i].length; j++) {
                let stoneDiv = document.querySelector(`div[location=${leftDiagonalWins[i][j]}`)
                if(stoneDiv.children.length === 0) {
                    continue
                }
                else {
                    let childAttribute = stoneDiv.children[0].getAttribute('player')
                    if(childAttribute === player){
                        count++
                        if(count === 5) {
                            console.log(`${player} wins!`)
                            return;
                        }
                    }
                }
            }
            count *= 0; 
        }

    }  

    function checkRightDiagonalWin(player) {
        let count = 0; 
        for(let i = 0; i < rightDiagonalWins.length; i++) {
            for(let j = 0; j < rightDiagonalWins[i].length; j++) {
                let stoneDiv = document.querySelector(`div[location=${rightDiagonalWins[i][j]}`)
                if(stoneDiv.children.length === 0) {
                    continue
                }
                else {
                    let childAttribute = stoneDiv.children[0].getAttribute('player')
                    if(childAttribute === player){
                        count++
                        if(count === 5) {
                            console.log(`${player} wins!`)
                            return;
                        }
                    }
                }
            }
            count *= 0; 
        }

    }  
    
    

})