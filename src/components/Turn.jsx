import { TURNS } from '../logic/constants'

function Turn ({ turn }) {
  return (
    <section className='flex justify-center items-center'>
      <div
        className={`${turn === TURNS.X ? 'bg-[#09f]' : ''} text-5xl flex justify-center items-center w-[70px] h-[70px] rounded-md pointer-events-none`}
      >
        {TURNS.X}
      </div>

      <div
        className={`${turn === TURNS.O ? 'bg-[#09f]' : ''} text-5xl flex justify-center items-center w-[70px] h-[70px] rounded-md pointer-events-none`}
      >
        {TURNS.O}
      </div>
    </section>
  )
}

export default Turn
