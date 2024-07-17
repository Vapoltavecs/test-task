import { AnimatePresence } from 'framer-motion';
import s from './App.module.css'
import { Square } from './components/Square';
import { sqauresSelector } from './redux/selectors/sqauresSelector';
import { sqauresActions } from './redux/slices/squaresSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks/hooks';

function App() {
  const squares = useAppSelector(sqauresSelector)
  const dispatch = useAppDispatch()

  const onAdd = () => {
    dispatch(sqauresActions.addSquare())
  }

  const onRemove = () => {
    dispatch(sqauresActions.removeSquare())
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
