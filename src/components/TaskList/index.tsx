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
  setNumFinishedTasks: (n: number) => void
}


interface TaskListProps {
  taskList: ItemOfListProps[] | []
  setListItem: (nlist: ItemOfListProps[]) => void
  setNumCreatedTasks: (n: number) => void
  numCreatedTasks: number
  setNumFinishedTasks: () => void
}

export function TaskList({ taskList, setListItem, setNumCreatedTasks, numCreatedTasks, setNumFinishedTasks }: TaskListProps) {


  function handleDeleteFromListItem(id: string) {
    const newList = taskList.filter(item => item.id !== id)
    setListItem(newList)
    setNumCreatedTasks(newList.length)
  }

  return (
    <div className={style.listContainer}>
      {
        taskList.length > 0 && (
          taskList.map((item) => {
            return (
              <ListItem
                key={item.id + item.content}
                id={item.id}
                content={item.content}
                finished={item.finished}
                handleDeleteFromListItem={() => handleDeleteFromListItem(item.id)}
                numCreatedTasks={numCreatedTasks}
                setNumFinishedTasks={() => setNumFinishedTasks}
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