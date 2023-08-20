


import { ItemPane } from '../ItemPane'
import style from './style.module.css'

export function TaskPanel() {
  return (
    <div className={style.content}>
      <div className={style['header-panel']}>
        <ItemPane key='countTaskCreated' label='Tarefas criadas' count={0} />
        <ItemPane key='countTaskFinished' label='Concluídas' count={0} color />
      </div>
    </div>
  )
}