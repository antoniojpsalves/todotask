import style from './style.module.css'

import plus from '../../assets/plus.png'
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ItemListProps } from '../TaskList';


interface InputNewTaskProps {
  addTask: (tasks: ItemListProps[]) => void;
  before: ItemListProps[];
}


export function InputNewTask({ addTask, before }: InputNewTaskProps) {

  const [inputValue, setInputValue] = useState('')


  function handleOnInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleAddNewTask() {
    console.log(inputValue)


    if (inputValue.length === 0) return;

    const newTask: ItemListProps = {
      id: uuidv4(),
      content: inputValue,
      finalizado: false
    }

    addTask([...before, newTask])
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