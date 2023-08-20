

import { useState } from 'react'
import { ItemListProps } from '../TaskList'
import style from './style.module.css'
import { Trash } from 'phosphor-react'


export function ListItem({ id, finished, content, handleDeleteFromListItem, numCreatedTasks, setNumFinishedTasks }: ItemListProps) {


  const [checked, setChecked] = useState(finished)

  function changeChecked() {
    setChecked(!checked)
    setNumFinishedTasks(numCreatedTasks + 1)
  }

  function handleOnDeleteItem(id: string) {
    handleDeleteFromListItem(id)
  }

  return (
    <div key={id} className={style.itemTask}>
      <div className={style.itemCheck}>
        <input
          type="checkbox"
          id={id}
          name={id}
          className={style['checkbox-round']}
          checked={checked}
          onClick={changeChecked}
        />
        <label htmlFor={id} className={checked ? style.finishedItem : ''}>{content}</label>
      </div>
      <button title="Deletar comentário" onClick={() => handleOnDeleteItem(id)}>
        <Trash size={12} />
      </button>
    </div>
  )

}