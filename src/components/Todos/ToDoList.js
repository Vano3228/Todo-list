import ToDoElement from "./ToDoElement";
import "./ToDoList.css"
const ToDoList = ({todos, deleteTodo, completeTodo}) => {
    return(
        <div className="todolist">
            {!todos.length && <h2>List is empty</h2>}
            {todos.map((el)=>
                <ToDoElement key={el.id} el={el} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
            )}
        </div>
    )
}

export default ToDoList