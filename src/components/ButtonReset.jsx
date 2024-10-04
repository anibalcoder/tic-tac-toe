function ButtonReset ({
  children,
  resetGame
}) {
  return (
    <button
      className='text-sm font-bold border-2 border-white rounded-md py-2 px-3 transition-[background-color] duration-300 hover:text-black hover:bg-white'
      onClick={resetGame}
    >
      {children}
    </button>
  )
}

export default ButtonReset
