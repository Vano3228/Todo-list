import Creation from "./components/Todos/Creation";
import ToDoList from "./components/Todos/ToDoList";
import TodosButtons from "./components/Todos/TodosButtons";

import {v4 as uuidv4} from 'uuid'
import './App.css';
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState([])
    const countComp = todos.filter((el)=>el.isCompleted).length

    const addTodo = (text) =>{
        if (!!text){
            const newTodo = {
                text:text,
                isCompleted:false,
                id: uuidv4()
            }
            setTodos([...todos, newTodo])
        }
    }

    const deleteTodo = (key) =>{
        setTodos(todos.filter((el)=>el.id !== key))
    }

    const completeTodo = (key) =>{
        setTodos(todos.map((el)=>{
            if (el.id === key) {
                return {...el, isCompleted: !el.isCompleted}
            }
            else{
                return {...el}
            }
        }))
    }

    const deleteComplete = ()=>{
        setTodos(todos.filter((el) => !el.isCompleted))
    }


    return (
    <div className="App">
      <h1>ToDo App</h1>
        <Creation addTodo = {addTodo}/>
        {!!todos.length &&
            <TodosButtons setTodos={setTodos} deleteComplete={deleteComplete} countComp={countComp}/>}
        <ToDoList todos = {todos} deleteTodo = {deleteTodo} completeTodo={completeTodo}/>
        {!!countComp &&
            <div className='countComp'><h3>You have {countComp} completed tasks!</h3></div>}
    </div>
  );
}


export default App;