
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import React, { useState } from "react";

function App() {
  // -------------ColorBox-------------------------
  // return (
  //   <div className="app">
  //     <h1>Welcome to React Hooks</h1>

  //     <ColorBox />
  //   </div>
  // );

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Quang'},
    { id: 2, title: 'Chuc'},
    { id: 3, title: 'Hang'}
  ]);

  function handleTodoClick(todo) {
    const itemDel = todoList.findIndex(x => x.id === todo.id);
    if (itemDel < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(itemDel, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>TodoList</h1>

      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  )
}

export default App;
