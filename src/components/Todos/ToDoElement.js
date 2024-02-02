import './ToDoElement.css'
import {RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";

const ToDoElement = ({el, deleteTodo, completeTodo}) => {
    return(
        <div className={`element  ${el.isCompleted ? 'completed' : ''}`} >
            <RiTodoFill className='todoIcon'/>
            <div className='todoText'>{el.text}</div>
            <RiDeleteBin2Line className='bin' onClick={()=>{
                deleteTodo(el.id)
            }}/>
            <FaCheck className='check' onClick={() => {
                completeTodo(el.id)
            }}/>
        </div>
    )
}
export default ToDoElement