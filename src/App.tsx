import { useState } from 'react'
import { generateUniqueId } from './utils/generateUniqueId';
import { getRandomColor } from './utils/getRandomColor';
import { AnimatePresence } from 'framer-motion';
import s from './App.module.css'
import { ISquare, Square } from './components/Square';

function App() {
  const [squares, setSquares] = useState<ISquare[]>([])

  const onAdd = () => {
    setSquares(squares => [{id: generateUniqueId(), color: getRandomColor()}, ...squares])
  }

  const onRemove = () => {
    setSquares(squares => {
      if(squares.length === 0) return squares
      squares.pop()
      return [...squares]
    })
  }

  return (
    <>
    <div>
      <button onClick={onAdd}>Добавить</button>
      <button onClick={onRemove}>Удалить</button>
    </div>
    <div className={s.wrapper}>
      <AnimatePresence>
        {squares.map(square => <Square {...square} key={square.id} className={s.item}/>)}
      </AnimatePresence>
    </div>
    </>
  )
}

export default App
