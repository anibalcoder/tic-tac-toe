function Square ({
  children,
  index,
  updateBoard
}) {
  return (
    <div
      className='w-25 h-25 text-5xl border-2 border-white rounded-md flex justify-center items-center'
      onClick={() => updateBoard(index)}
    >
      {children}
    </div>
  )
}

export default Square
