


import { ItemPane } from '../ItemPane'
import style from './style.module.css'


interface TaskPanelProps {
  numCreatedTasks: number
  numFinishedTasks: number
}

export function TaskPanel({ numCreatedTasks, numFinishedTasks }: TaskPanelProps) {

  return (
    <div className={style.content}>
      <div className={style['header-panel']}>
        <ItemPane key='countTaskCreated' label='Tarefas criadas' count={numCreatedTasks} />
        <ItemPane key='countTaskFinished' label='Concluídas' count={numCreatedTasks} countTotal={numFinishedTasks} color />
      </div>
    </div>
  )
}