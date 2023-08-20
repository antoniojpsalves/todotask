

import { ItemListProps } from '../TaskList'
import style from './style.module.css'
import { Trash } from 'phosphor-react'


export function ListItem({ id, finalizado, content }: ItemListProps) {

  return (
    <div key={id} className={style.itemTask}>
      <div className={style.itemCheck}>
        <input
          type="checkbox"
          id={id + content}
          name={id + content}
          className={style['checkbox-round']}
          checked={finalizado}
        />
        <label htmlFor={id + content}>{content}</label>
      </div>
      <button title="Deletar comentário">
        <Trash size={12} />
      </button>
    </div>
  )

}