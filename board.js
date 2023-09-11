document.addEventListener('DOMContentLoaded', (e) => {


    /**
     * ************BOARD************
     */


    const boardButtons = document.querySelectorAll('button')
    const gameBoard = document.querySelector('.gameBoard')
    const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

    //creates a board based on the value of the button
    for(let i = 0; i < boardButtons.length; i++) {
        boardButtons[i].addEventListener('click', (e) => {
            createBoard(e.target.value)
        })
    }

    //intializes board
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
                    }
                    else {
                        isBlacksTurn = true; 
                        newStone.style.backgroundColor = 'white'
                    }
                    targetDiv.append(newStone)
                }))
            })
        }) 
    }

    
})