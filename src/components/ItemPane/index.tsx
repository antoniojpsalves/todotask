


import style from './style.module.css'


interface ItemPaneProps {
  label: string
  count: number
  color?: boolean
}

export function ItemPane({ label, count, color }: ItemPaneProps) {

  return (
    <div className={style.itemPaneContainer}>
      <span
        className={color ? style.itemCompletedLabel : style.itemLabel} >
        {label}
      </span>
      <span className={style.itemCount}>{count}</span>
    </div>
  )

}