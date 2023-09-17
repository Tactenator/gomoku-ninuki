document.addEventListener('DOMContentLoaded', (e) => {


    /**
     * ************BOARD************
     */


    const boardButtons = document.querySelectorAll('button')
    const gameBoard = document.querySelector('.gameBoard')
    const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    //creates a board based on the value of the button
    for(let i = 0; i < boardButtons.length; i++) {
        boardButtons[i].addEventListener('click', (e) => {
            createBoard(e.target.value)
        })
    }

    //initializes board
    function createBoard(e) {
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

    let isBlacksTurn = true; 
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
            checkDiagonalWin('black')
        }
        else {

            checkRowWin('row', stoneRow, 'white')
            checkRowWin('col', stoneColumn, 'white')
            checkDiagonalWin('white')
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

    function checkDiagonalWin(player) {
        //grab from each diagonal. Needs to be from each side. 
        console.log(player)
        let stonesArr = []
        for (i = 0; i < lettersArr.length; i++) {
            for(j = 0; j < lettersArr.length; j++) {
                let square = document.querySelector(`div[location=${lettersArr[i]}${numbersArr[i]}]`)
                console.log(square)
            }
        }
    }   

})