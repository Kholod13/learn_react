import FieldInput from "./FieldInput"
import Button from "./Button"

const TodoForm = (props) => {
    const { 
        onSearchInput,
        addTask,
        newTaskTitle,
        setNewTaskTitle
    } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        addTask();
    }

    return (
        <>
            <form className="todo__form" onSubmit={onSubmit}>
                <FieldInput 
                    id="new-task"
                    label="New Task title"
                    className="todo__field"
                    value={newTaskTitle}
                    onInput={(event) => setNewTaskTitle(event.target.value)}
                />
                <Button type="submit">Add</Button>
            </form>
            <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
                <FieldInput 
                    id="search-task"
                    label="Search Task title"
                    className="todo__field"
                    type="search"
                    onInput={(event) => onSearchInput(event.target.value)}
                />
            </form>
        </>
    )
}

export default TodoForm;