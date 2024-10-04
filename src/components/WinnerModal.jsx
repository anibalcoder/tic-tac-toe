import { ButtonReset, Square } from './index'

function WinnerModal ({
  winner,
  resetGame
}) {
  if (winner === null) return

  return (
    <section
      className='bg-black-70 absolute inset-0 flex justify-center items-center'
    >
      <div
        className='bg-gray-900 w-responsive h-80 border-2 border-white rounded-md flex flex-col justify-center items-center gap-y-8'
      >
        <h2 className='text-2xl text-slate-300 font-bold'>
          {winner ? 'Ganó' : 'Empate'}
        </h2>

        {
          winner && <Square>{winner}</Square>
        }

        <ButtonReset resetGame={resetGame}>
          Empezar de nuevo
        </ButtonReset>
      </div>
    </section>
  )
}

export default WinnerModal
