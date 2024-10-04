import { TURNS } from '../logic/constants'

function Turn () {
  return (
    <section className='flex justify-center items-center'>
      <div
        className='bg-[#09f] text-5xl flex justify-center items-center w-[70px] h-[70px] rounded-md pointer-events-none'
      >
        {TURNS.X}
      </div>

      <div
        className='text-5xl flex justify-center items-center w-[70px] h-[70px] rounded-md pointer-events-none'
      >
        {TURNS.O}
      </div>
    </section>
  )
}

export default Turn
