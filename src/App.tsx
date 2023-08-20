import './global.css'
import { Header } from './components/Header'
import { InputNewTask, ItemOfListProps } from './components/InputNewTask'
import style from './app.module.css'
import { TaskPanel } from './components/TaskPane'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

function App() {

  const [userTaskList, setUserTaskList] = useState<ItemOfListProps[]>([])

  const [numCreatedTasks, setNumCreatedTasks] = useState(0)

  const [numFinishedTasks, setNumFinishedTasks] = useState(0)

  return (
    <div className={style.content}>
      <Header />
      <InputNewTask
        addTask={setUserTaskList}
        before={userTaskList}
        numCreatedTasks={numCreatedTasks}
        setNumCreatedTasks={setNumCreatedTasks}
      />
      <TaskPanel
        numCreatedTasks={numCreatedTasks}
        numFinishedTasks={numFinishedTasks}
      />
      <TaskList
        taskList={userTaskList}
        setListItem={setUserTaskList}
        setNumCreatedTasks={setNumCreatedTasks}
        numCreatedTasks={numCreatedTasks}
        setNumFinishedTasks={() => setNumFinishedTasks}
      />
    </div>
  )
}

export default App
