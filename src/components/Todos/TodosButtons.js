import Button from '../UI/Button'
import {RiDeleteBin2Line} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";
const TodosButtons = ({setTodos, deleteComplete, countComp}) =>{
    return(
        <div>
            <Button onClick={()=> setTodos([])} title='Delete ALL tasks'> <RiDeleteBin2Line/> </Button>
            <Button onClick={deleteComplete} title='Delete completed tasks' disable={!countComp}> <FaCheck/> </Button>
        </div>
    )
}

export default TodosButtons