import style from './style.module.css'

import plus from '../../assets/plus.png'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface InputNewTaskProps {
  addTask: (tasks: ItemOfListProps[]) => void
  before: ItemOfListProps[]
  numCreatedTasks: number
  setNumCreatedTasks: (n: number) => void
}

export interface ItemOfListProps {
  id: string
  content: string
  finished: boolean
}


export function InputNewTask({ addTask, before, numCreatedTasks, setNumCreatedTasks }: InputNewTaskProps) {

  const [inputValue, setInputValue] = useState('')


  function handleOnInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleAddNewTask() {
    // console.log(inputValue)


    if (inputValue.length === 0) return;

    const newTask: ItemOfListProps = {
      id: uuidv4(),
      content: inputValue,
      finished: false
    }

    addTask([...before, newTask])
    setNumCreatedTasks(numCreatedTasks + 1)
    setInputValue('')
  }

  return (
    <div className={style['container-input-new-task']}>
      <input type="text" name="newTaskInput" id="newTaskInput" placeholder='Adicione uma nova tarefa' className={style.input} value={inputValue} onChange={handleOnInputChange} />
      <button className={style.button} onClick={handleAddNewTask}>
        Criar
        <img src={plus} alt="simbolo de adição" />
      </button>
    </div>
  )
}