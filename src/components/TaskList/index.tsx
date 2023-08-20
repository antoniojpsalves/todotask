import { EmptyListItem } from '../EmptyListItem'
import { ListItem } from '../ListItem'
import style from './style.module.css'


interface TaskListProps {
  taskList: ItemListProps[] | []
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
        taskList.length > 0 && (
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