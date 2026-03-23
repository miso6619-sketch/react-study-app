import React, { useState } from 'react'
import TodoItem from '../components/TodoItem'

export default function TodoPage() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 실습' },
    { id: 2, text: '컴포넌트 실습' },
  ])

  // 할 일 추가 함수
  function addTodo() {
    if (inputValue.trim() === '') return

    const newTodo = {
      id: Date.now(),
      text: inputValue
    }

    setTodos([...todos, newTodo])
    setInputValue('')
  }

  // 삭제 함수
  function removeTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <section className="sec-todoPage">
      <div className="inner">
        <h2>할 일 목록</h2>

        <div className="input-row">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addTodo}>추가</button>
        </div>

        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onRemove={removeTodo} />
          ))
          }
        </ul>
      </div>
    </section>
  )
}