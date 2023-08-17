import './global.css'
import { Header } from './components/Header'
import { InputNewTask } from './components/InputNewTask'
import style from './app.module.css'

function App() {

  return (
    <div className={style.content}>
      <Header />
      <InputNewTask />
    </div>
  )
}

export default App
