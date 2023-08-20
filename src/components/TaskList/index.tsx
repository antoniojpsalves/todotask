import { EmptyListItem } from '../EmptyListItem'
import { ItemOfListProps } from '../InputNewTask'
import { ListItem } from '../ListItem'
import style from './style.module.css'



export interface ItemListProps {
  id: string
  finished: boolean
  content: string
  handleDeleteFromListItem: (id: string) => void
  numCreatedTasks: number
  numFinishedTasks: number
  setNumFinishedTasks: (n: number) => void
  onHandleChangeCheckMark: (id: string) => void
}


interface TaskListProps {
  taskList: ItemOfListProps[] | []
  setListItem: (nlist: ItemOfListProps[]) => void
  setNumCreatedTasks: (n: number) => void
  numCreatedTasks: number
  numFinishedTasks: number
  setNumFinishedTasks: (n: number) => void
}

export function TaskList({ taskList, setListItem, setNumCreatedTasks, numCreatedTasks, numFinishedTasks, setNumFinishedTasks }: TaskListProps) {


  function handleDeleteFromListItem(id: string) {
    const newList = taskList.filter(item => item.id !== id)
    setListItem(newList)
    setNumCreatedTasks(newList.length)

    const [listRemoved] = taskList.filter(item => item.id === id)

    if (listRemoved.finished === true) {
      setNumFinishedTasks(numFinishedTasks - 1)
    }
  }


  function handleChangeCheckMark(id: string) {
    const newList = taskList.map(item => {
      if (item.id === id) {
        item.finished = !item.finished
      }
      return item
    })
    setListItem(newList)
  }

  return (
    <div className={style.listContainer}>
      {
        taskList.length > 0 && (
          taskList.map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                content={item.content}
                finished={item.finished}
                handleDeleteFromListItem={() => handleDeleteFromListItem(item.id)}
                numCreatedTasks={numCreatedTasks}
                numFinishedTasks={numFinishedTasks}
                onHandleChangeCheckMark={handleChangeCheckMark}
                setNumFinishedTasks={setNumFinishedTasks}
              />
            )
          })
        )
      }
      {
        taskList.length === 0 && (
          <EmptyListItem />
        )
      }
    </div>
  )

}