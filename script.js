document.addEventListener('DOMContentLoaded', (e) => {
    const boardButtons = document.querySelectorAll('button')
    const gameBoard = document.querySelector('.gameBoard')

    for(let i = 0; i < boardButtons.length; i++) {
        boardButtons[i].addEventListener('click', (e) => {
            createBoard(e.target.value)
        })
    }

    function createBoard(e) {
        for(let i = 0; i < e; i++) {
            for(let j = 0; j < e; j++) {
                const newSquare = document.createElement('div')
                newSquare.setAttribute('row-id', i + 1)
                newSquare.setAttribute('square-value', j + 1);  
                newSquare.classList.add('gameSquare'); 
                gameBoard.append(newSquare)
            }
        }
        createCorners()
    }

    function createCorners () {
        const spaces = document.querySelectorAll('.gameSquare')
        for(let i = 0; i < spaces.length; i++) {
            const rowId = spaces[i].getAttribute('row-id')
            const squareValue = spaces[i].getAttribute('square-value')
            if(rowId === "1") {
                const topLeft = document.createElement('div')
                topLeft.classList.add('topLeft')
                const bottomLeft = document.createElement('div')
                bottomLeft.classList.add('bottomLeft')
                spaces[i].append(topLeft, bottomLeft)
                if(squareValue === "9") {
                    const topRight = document.createElement('div')
                    topRight.classList.add('topRight')
                    const bottomRight = document.createElement('div')
                    bottomRight.classList.add('bottomRight')
                    spaces[i].append(topRight, bottomRight)
                }
            }
            else {
                const bottomLeft = document.createElement('div')
                bottomLeft.classList.add('bottomLeft')
                spaces[i].append(bottomLeft)
                if(squareValue === "9") {
                    const bottomRight = document.createElement('div')
                    bottomRight.classList.add('bottomRight')
                    spaces[i].append(bottomRight)
                }
            }
            
        }

    }
    
})