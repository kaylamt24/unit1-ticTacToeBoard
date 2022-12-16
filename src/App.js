import {useState} from 'react'
import './App.css';
import Square from './Square'

//With useState, returns an array of two elements. square/player is the state value. set squares/player is the function that updates the state value. The "hook" is called with the start value of whatever is after calling useState. In this instance, 9 empty strings and boolean of true. 

//map allows you to apply a function to each element of an array and return a new array.

const App = () => {

  const [squares, setSquares] = useState(['','','','','','','','','',])
  const [player, setPlayer] = useState(true)

  const handleClick = () => {
    setSquares (['','','','','','','','','',])
    setPlayer (true)
  }
  // This handleClick resets the board after the button has been clicked.  We are just invoking the setSquares/setPlayer so it does not need to be set to a const because it has been declared. You do not need to call squares/player because it is the state value. You do not need to call useState either because it has already been done above. We are just invoking so we do not need to assign it with a =


  const calculateWinner = (array) => {
    let lines = [
        //lines is the main array and then the arrays inside are considered sub arrays.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]

    //I'm sorry Brody - devgenius.io had my back all along. I always feel like there is a reasoning behind everything and I need to understand it all and how to come to the conclusion when sometimes, google has the answer and it is okay to steal it.


    //in case you were curious, per the googs, there are 19,683 different ways to win a 3x3 tic tac toe board. ( https://cdn.theatlantic.com/thumbor/Er7vK5JSdS1voeQg05sL1C09Kmw=/80x16:1280x916/1200x900/media/img/mt/2014/09/The_More_You_Know/original.png )
 


    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]
      if( array[a] && array[a] === array[b] && array[a] === array[c])
       { return`${array[a]} won!`
      } 
      // return 'Who will win?'

      }
        return 'Who will win?'
    }
  
    

//check if they match. If so, return a string of arr[a] won. Since we are looking if arr[a] is the winner, we need to see if it is equal to the other indexes. 


  return (
        <div className='App'>
          <span>{calculateWinner(squares)}</span>
            <div className='container'>
    {squares.map((value, index) => {
      return (
        <Square 
        squares = {squares}
        setSquares = {setSquares}
        player = {player}
        setPlayer = {setPlayer}
        index = {index}
        squareValue = {value}
        //destructuring
        />
      )
    })}
        <button onClick={handleClick}>Reset</button>

  </div>
  </div>
  )
}



export default App
