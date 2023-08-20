import './global.css'
import { Header } from './components/Header'
import { InputNewTask } from './components/InputNewTask'
import style from './app.module.css'
import { TaskPanel } from './components/TaskPane'
import { TaskList, ItemListProps } from './components/TaskList'
import { useState } from 'react'

function App() {

  // const exempleList: ItemListProps[] = [
  //   {
  //     id: 1,
  //     finalizado: false,
  //     content: 'asdasdasdas',
  //   },
  //   {
  //     id: 2,
  //     finalizado: false,
  //     content: 'asdasdasdas',
  //   },
  //   {
  //     id: 3,
  //     finalizado: false,
  //     content: 'asdasdasdas',
  //   },
  //   {
  //     id: 4,
  //     finalizado: false,
  //     content: 'asdasdasdas',
  //   }
  // ]


  const [userTaskList, setUserTaskList] = useState<ItemListProps[]>([]);

  return (
    <div className={style.content}>
      <Header />
      <InputNewTask addTask={setUserTaskList} before={userTaskList} />
      <TaskPanel />
      <TaskList taskList={userTaskList} />
    </div>
  )
}

export default App
