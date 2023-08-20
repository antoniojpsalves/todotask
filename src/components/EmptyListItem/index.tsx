


import style from './style.module.css'
import clipboard from '../../assets/clipboard.png'


export function EmptyListItem() {
  return (
    <div className={style.emptyList}>
      <div className={style.containerImg}>
        <img src={clipboard} alt="Lista vazia" title='A lista de tarefas encontra-se vazia' />
      </div>
      <div className={style.message}>
        <h3 className={style.title}>Você ainda não tem tarefas cadastradas</h3>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}