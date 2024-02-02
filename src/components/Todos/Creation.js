import "./Creation.css"
import {useState} from "react";
import Button from "../UI/Button";
const Creation = ({addTodo}) =>{
    const [text, setText] = useState('')

    return (
        <div className="creation">
            <form onSubmit={(event)=>{
                event.preventDefault()
                addTodo(text)
                setText('')
            }}>
                <input
                    type="text"
                    value = {text}
                    placeholder="Напиши задачу"
                    onChange={(event) =>{
                        setText(event.target.value)
                }}/>
                <Button title='Add new ToDo'>Add ToDo</Button>

            </form>
        </div>
    )
}

export default Creation