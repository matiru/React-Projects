
import './index.css'
import React, { useEffect, useState } from 'react'


export default function TicTacToe() {



    function Square({ value, onClick }) {

        return <button onClick={onClick} className="square">{value}</button>

    }

    const [squares , setSquares] = useState(Array(9).fill(''))
    const[isXTurn , setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');


    function handleClick(getCurrentSquare){

        let cpySquare = [...squares];
        if(getWinner(cpySquare) || cpySquare[getCurrentSquare] !== '') return;
        cpySquare[getCurrentSquare] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(cpySquare);
    }

    function getWinner(squares){
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]

        ];

        for (let i = 0; i < winningPatterns.length; i++){
           const [a,b,c] = winningPatterns[i];
              if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }

        } return null;
    }

    useEffect(() => {
        if(!getWinner(squares) && squares.every(Boolean)){
            setStatus('It is a draw');
        } else if (getWinner(squares)){
           setStatus(`Winner is ${getWinner(squares)}`)     
        }
        else{
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
        }
      
    }, [squares,isXTurn]);

    function handleRestart(){
        setSquares(Array(9).fill(''));
        setIsXTurn(true);
       
    }


    return (
        <div className="tic-tac-toe-container">
            <h1>Tic Tac Toe</h1>

            <div className="row">
                <Square value={ squares[0]} onClick={()=> handleClick(0)} />
                <Square value={ squares[1]} onClick={()=> handleClick(1)}  />
                <Square value={ squares[2]} onClick={()=> handleClick(2)}  />

            </div>
            <div className="row">
                <Square value={ squares[3]}onClick={()=> handleClick(3)} />
                <Square value={ squares[4]}onClick={()=> handleClick(4)}  />
                <Square value={ squares[5]}onClick={()=> handleClick(5)}  />
            </div>
            <div className="row">
                <Square value={ squares[6]} onClick={()=> handleClick(6)} />
                <Square value={ squares[7]} onClick={()=> handleClick(7)} />
                <Square  value={ squares[8]} onClick={()=> handleClick(8)} />
            </div>
            <div className="status"><h3>{status}</h3></div>
            <button onClick={handleRestart}> restart</button>

        </div>
    );
}