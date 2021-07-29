
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';
import React, { useState, useEffect } from "react";
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFiler from './components/PostFilter';

function App() {
  // -------------ColorBox-------------------------
  // return (
  //   <div className="app">
  //     <h1>Welcome to React Hooks</h1>

  //     <ColorBox />
  //   </div>
  // );

  //-------------TODO LIST ----------------------
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

  //----------------FORM SUBMIT-------------------

  function onTodoFormSubmit(formValues) {
    //add value to TodoList
    const itemAdd = {
      id: todoList.length + 1,
      ...formValues //lay tat ca key trong form values
    }
    const newTodo = [...todoList];
    newTodo.push(itemAdd);
    setTodoList(newTodo);
  }

  //-----------------------POST LIST--------------------

  const [postList, setPostList] = useState(['']);

  //------------------Pagination------------------------
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });
    
  function handlePageChange(newPage) {
    console.log('New Page:', newPage);  
    setFilters({
      ...filters,
      _page: newPage
    });
  }

  //---------------------PostFilter Search-------------
  function handlePostFilters (newFilters) {
    console.log('New filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm
    });
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const paramString = queryString.stringify(filters);
      const url = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      console.log(responseJson);

      const { data, pagination } = responseJson;
      setPostList(data);
      setPagination(pagination);
      } catch (error) {
        console.log('Fail to request API', error.message);
      }
    }
    fetchData();
  }, [filters]);

  return (
    <div className="app">
      <h1>LEARCH REACT HOOKS</h1>
      <h3>1. TodoForm</h3>
      <h5>Type a name and Enter to Add</h5>
      <TodoForm onSubmit={onTodoFormSubmit}/>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
      <h3>2. PostList from API</h3>
      <h5>Searh a Post:</h5>
      <PostFiler onSubmit={handlePostFilters}/>
      <PostList posts={postList}/>
      <Pagination pagination={pagination} onPageChange={handlePageChange}/>
    </div>
  )
}

export default App;
