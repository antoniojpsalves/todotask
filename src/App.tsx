import './global.css'
import { Header } from './components/Header'
import { InputNewTask } from './components/InputNewTask'
import style from './app.module.css'
import { TaskPanel } from './components/TaskPane'
import { TaskList } from './components/TaskList'

function App() {

  const exempleList = [
    {
      id: 1,
      finalizado: false,
      content: 'asdasdasdas',
    },
    {
      id: 2,
      finalizado: false,
      content: 'asdasdasdas',
    },
    {
      id: 3,
      finalizado: false,
      content: 'asdasdasdas',
    },
    {
      id: 4,
      finalizado: false,
      content: 'asdasdasdas',
    }
  ]

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
