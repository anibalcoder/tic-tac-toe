import confetti from 'canvas-confetti'
import { useState } from 'react'
import { ButtonReset, Board, Turn, WinnerModal } from './components/index'
import { TURNS } from './logic/constants'
import { verifyWinner, verifyTie } from './logic/board'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  function resetGame () {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  function updateBoard (index) {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = verifyWinner(newBoard)
    const newTie = verifyTie(newBoard)

    if (newWinner) {
      confetti()
      setWinner(turn)
    }

    if (newTie) {
      setWinner(false)
    }
  }

  return (
    <main className='flex flex-col gap-y-10 p-5'>
      <header className='flex flex-col items-center gap-y-4'>
        <h1 className='text-3xl font-bold'>T
          ic Tac Toe
        </h1>

        <ButtonReset resetGame={resetGame}>
          Reset del juego
        </ButtonReset>
      </header>

      <Board
        board={board}
        updateBoard={updateBoard}
      />

      <Turn />

      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />
    </main>
  )
}

export default App
