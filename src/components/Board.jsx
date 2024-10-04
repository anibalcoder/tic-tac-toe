import { Square } from './index'

function Board ({
  board,
  updateBoard
}) {
  return (
    <section
      className='grid grid-cols-3 gap-3'
    >
      {
        board.map((square, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
    </section>
  )
}

export default Board
