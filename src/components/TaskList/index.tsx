import style from './style.module.css'


interface TaskListProps {
  taskList: ItemListProps[]
}

interface ItemListProps {
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
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.id + item.content}
                name={item.id + item.content}
                checked={item.finalizado}
              />
              <label htmlFor={item.id + item.content}>{item.content}</label>
            </div>
          )
        })
      }
    </div>
  )

}