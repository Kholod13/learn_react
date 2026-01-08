import FieldInput from "./FieldInput"
import Button from "./Button"

const TodoForm = () => {
    return (
        <>
            <form className="todo__form">
                <FieldInput 
                    id="new-task"
                    label="New Task title"
                    className="todo__field"
                />
                <Button type="submit">Add</Button>
            </form>
            <form className="todo__form">
                <FieldInput 
                    id="search-task"
                    label="Search Task title"
                    className="todo__field"
                    type="search"
                />
            </form>
        </>
    )
}

export default TodoForm;