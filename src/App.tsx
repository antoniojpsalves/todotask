import './global.css'
import { Header } from './components/Header'
import { InputNewTask } from './components/InputNewTask'
import style from './app.module.css'
import { TaskPanel } from './components/TaskPane'
import { TaskList, ItemListProps } from './components/TaskList'

function App() {

  const exempleList: ItemListProps[] = []

  return (
    <div className={style.content}>
      <Header />
      <InputNewTask />
      <TaskPanel />
      <TaskList taskList={exempleList} />
    </div>
  )
}

export default App
