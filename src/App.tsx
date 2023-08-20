import './global.css'
import { Header } from './components/Header'
import { InputNewTask } from './components/InputNewTask'
import style from './app.module.css'
import { TaskPanel } from './components/TaskPane'

function App() {

  return (
    <div className={style.content}>
      <Header />
      <InputNewTask />
      <TaskPanel />
    </div>
  )
}

export default App
