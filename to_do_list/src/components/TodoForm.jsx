import FieldInput from "./FieldInput"
import Button from "./Button"
import FieldSearch from "./FieldSearch"

const TodoForm = () => {
    return (
        <>
            <form className="todo__form">
                <FieldInput />
                <Button />
            </form>
            <form className="todo__form">
                <FieldSearch />
            </form>
        </>
    )
}

export default TodoForm;