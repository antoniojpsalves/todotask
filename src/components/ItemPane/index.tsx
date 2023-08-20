


import style from './style.module.css'

interface ItemPaneProps {
  label: string
  count: number
  countTotal?: number
  color?: boolean
}

export function ItemPane({ label, count, countTotal, color }: ItemPaneProps) {

  return (
    <div className={style.itemPaneContainer}>
      <span
        className={color ? style.itemCompletedLabel : style.itemLabel} >
        {label}
      </span>
      <span className={style.itemCount}>
        {color && (
          <span>{countTotal} de {count}</span>
        )}
        {countTotal == undefined && count}
      </span>
    </div>
  )

}