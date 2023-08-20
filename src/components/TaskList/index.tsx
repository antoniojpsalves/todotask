import { EmptyListItem } from '../EmptyListItem'
import { ItemOfListProps } from '../InputNewTask'
import { ListItem } from '../ListItem'
import style from './style.module.css'



export interface ItemListProps {
  id: string
  finished: boolean
  content: string
  handleDeleteFromListItem: (id: string) => void
}


interface TaskListProps {
  taskList: ItemOfListProps[] | []
  setListItem: (nlist: ItemOfListProps[]) => void
}

export function TaskList({ taskList, setListItem }: TaskListProps) {


  function handleDeleteFromListItem(id: string) {
    const newList = taskList.filter(item => item.id !== id)
    setListItem(newList)
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