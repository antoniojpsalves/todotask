import style from './style.module.css'

import plus from '../../assets/plus.png'


export function InputNewTask() {
  return (
    <div className={style['container-input-new-task']}>
      <input type="text" name="newTaskInput" id="newTaskInput" placeholder='Adicione uma nova tarefa' className={style.input} />
      <button className={style.button}>
        Criar
        <img src={plus} alt="simbolo de adição" />
      </button>
    </div>
  )
}