import { useState } from "react"

import TodoForm from "./TodoForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const [tasks, setTasks] = useState([
        { id: 'task-1', title: 'Buy milk', isDone: false },
        { id: 'task-2', title: 'Pet the cat', isDone: true },
        { id: 'task-3', title: 'Drink the beer', isDone: false },
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const deleteAllTasks = () => {
        const isConfirmed = window.confirm('Are you sure you want to delete all tasks?');
        if (isConfirmed) {
            setTasks([]);
        }
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, isDone: isDone };
                }

                return task;
            })
        )
    }

    const filterTasks = (query) => {
        console.log(`Search: ${query}`);
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            };

            setTasks([...tasks, newTask]);
            setNewTaskTitle('');
        }
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <TodoForm
                onSearchInput={filterTasks}
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />
            <TodoInfo 
                total={tasks.length} 
                done={tasks.filter(task => task.isDone).length} 
                onDeleteAllButtonClick={deleteAllTasks} 
            />
            <TodoList 
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo;