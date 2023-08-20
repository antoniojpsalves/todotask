import { ListItem } from '../ListItem'
import style from './style.module.css'


interface TaskListProps {
  taskList: ItemListProps[]
}

export interface ItemListProps {
  id: number
  finalizado: boolean
  content: string
}

export function TaskList({ taskList }: TaskListProps) {

  return (
    <div className={style.listContainer}>
      {
        taskList.map((item) => {
          return (
            <ListItem
              key={item.id + item.content}
              id={item.id}
              content={item.content}
              finalizado={item.finalizado}
            />
          )
        })
      }
    </div>
  )

}