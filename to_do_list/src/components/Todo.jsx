import { useState, useEffect } from "react"

import TodoForm from "./TodoForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');

        if (savedTasks) {
            return JSON.parse(savedTasks);
        }

        return [
            { id: 'task-1', title: 'Buy milk', isDone: false },
            { id: 'task-2', title: 'Pet the cat', isDone: true },
            { id: 'task-3', title: 'Drink the beer', isDone: false },
        ];
    });

    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            };

            setTasks([...tasks, newTask]);
            setNewTaskTitle('');
            setSearchQuery('');
        }
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const clearedSearchQuery = searchQuery.trim().toLowerCase();
    const filteredTasks = clearedSearchQuery.length > 0
        ? tasks.filter(task => task.title.toLowerCase().includes(clearedSearchQuery))
        : null;

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <TodoForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TodoInfo 
                total={tasks.length} 
                done={tasks.filter(task => task.isDone).length} 
                onDeleteAllButtonClick={deleteAllTasks} 
            />
            <TodoList 
                tasks={tasks}
                filteredTasks={filteredTasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo;