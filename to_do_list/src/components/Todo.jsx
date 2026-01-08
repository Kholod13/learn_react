import TodoForm from "./TodoForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const tasks = [
        { id: 'task-1', title: 'Buy milk', isDone: false },
        { id: 'task-2', title: 'Pet the cat', isDone: true },
        { id: 'task-3', title: 'Drink the beer', isDone: false },
    ];
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <TodoForm />
            <TodoInfo total={tasks.length} done={tasks.filter(task => task.isDone).length} />
            <TodoList tasks={tasks} />
        </div>
    )
}

export default Todo;