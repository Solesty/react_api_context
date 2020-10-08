import React, { useContext, useState, useEffect } from 'react'

import { TaskListContext } from '../context/TaskListContext'

export default function TaskForm() {

    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)

    // LOCAL STATE
    const [title, setTitle] = useState("")

    const handleChange = event => {
        setTitle(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle("")
        }
        else {
            editTask(title, editItem.id)
        }
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        } else {
            setTitle("")
        }
    }, [editItem]) // refresh when this changes

    return (
        <form onSubmit={handleSubmit} className="form">
            <input className="task-input"
                placeholder="Add Task.."
                onChange={handleChange}
                value={title}
                required />
            <div className="buttons" >
                <button type="submit" className="btn add-task-btn">
                    {
                        editItem ? 'Edit Task' : 'Add Task'
                    }
                </button>
                <button onClick={clearList} className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}
