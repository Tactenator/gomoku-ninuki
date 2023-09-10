document.addEventListener('DOMContentLoaded', (e) => {


    /**
     * ************BOARD************
     */


    const boardButtons = document.querySelectorAll('button')
    const gameBoard = document.querySelector('.gameBoard')
    const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

    for(let i = 0; i < boardButtons.length; i++) {
        boardButtons[i].addEventListener('click', (e) => {
            createBoard(e.target.value)
        })
    }

    function createBoard(e) {
        for(let i = 0; i < e; i++) {
            for(let j = 0; j < e; j++) {
                const newSquare = document.createElement('div')
                newSquare.setAttribute('row-id', lettersArr[i])
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
            const squareValue = parseInt(spaces[i].getAttribute('square-value'))
            const topLeft = document.createElement('div')
            topLeft.classList.add('topLeft')
            spaces[i].append(topLeft)
            topLeft.setAttribute('location', topLeft.parentElement.getAttribute('row-id') + squareValue)
            if(squareValue === 9) {
                const topRight = document.createElement('div')
                topRight.classList.add('topRight')
                // const bottomRight = document.createElement('div')
                // bottomRight.classList.add('bottomRight')
                spaces[i].append(topRight)
                topRight.setAttribute('location', topRight.parentElement.getAttribute('row-id') + (squareValue + 1) )
                // bottomRight.setAttribute('location', bottomRight.parentElement.getAttribute('row-id') + squareValue)
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

    function addLocationActivity(e) {
        const spacesArr = Array.from(e)
        spacesArr.forEach(space => {
            const children = Array.from(space.children); 
            children.forEach(child => {
                child.addEventListener('click', (e => {
                    console.log(e.target.getAttribute('location'))
                }))
            })
        }) 
    }
    
})