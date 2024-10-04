import { WINNER_COMBOS } from './constants'

function verifyWinner (board) {
  for (const combos of WINNER_COMBOS) {
    const [a, b, c] = combos

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      return true // ganador
    }
  }
  return false // empate
}

function verifyTie (board) {
  return board.every(square => square !== null)
}

export { verifyWinner, verifyTie }
