import React from 'react'

// In square you can pass props however when you do, each "item" has to have props in front of it. Example: props.sqaures, props.player. When you pass in the values and destructure them, it negates needing to use props. Per Alex, there are times when he still uses props because he passes in other values. This way, he knows which one is the child. 

////////////////////////**REWATCH ZOOM FROM 12/16/2022 FOR FURTHER CLARIFICATION**


const Square = ({squareValue, player, squares, setSquares, setPlayer, index}) => {
    console.log(squares, player)
    //in the instructions it wanted us to console.log(props.squares, props.player) however just like below, we can remove the props because we have destructured it. 

    let handleClick = () => {

        //SPLICE - changes the contents of the array by removing or replacing existing elements and/or adding new ones in its place. Slice accesses a part of the array without modifying it. 
        
        // Cannot use props.squareValue === false because it is strict equality. When you use !XXX, it negates a boolean value so it returns the opposite.  


        if (!squareValue) {
            if (player) { //player is set to useState(true)
                squares.splice(index, 1, 'X')
                setSquares(squares)
                setPlayer(!player) //player is false
            } else {
                squares.splice(index, 1, 'O')
                setSquares(squares)
                setPlayer(!player) //player is false
            }
            //This is where I struggled. But if you break down the instructions like Scott said, "Check if there is a value in squareValue" << We need an if statement so set that bad boy up. 
            ////////////////**THESE ARE THE INSTRUCTIONS FROM THE MATERIAL FOR FURTHER REFERENCE IN FUTURE PROJECTS IF NECESSARY**

            // If there is no value, but the player state that is passed through props is true, change the value of props.squares at props.index to “X”, invoke the setSquares function from props passing the new squares array, and toggle the value of props.player

            // Otherwise change the value at props.index to “O”, invoke props.setSquares with the new value of props.squares and toggle the value of props.player
        }
    }

    return (
    <div className='square' onClick={handleClick}> 
    {squareValue === 'O' ? <img src='https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png'/> : squareValue}
    </div>

    )
}

// under the handleClick is a ternary statement. 
// Ternary - conditional expression that is used to determine which element should be rendered. This is just a simpler way/one line way of doing a standard if else statement. ? = true, : = else --- {condition ? elementOne : elementTwo}





export default Square


