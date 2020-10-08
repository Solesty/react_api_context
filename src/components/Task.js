import React, { useContext } from 'react'

import { TaskListContext } from '../context/TaskListContext'

export default function Task({ task }) {
    const { removeTask, findItem } = useContext(TaskListContext)

    return (
        <li className="list-item" >
            <span>{task.title}</span>
            <div>
                <button onClick={(e) => removeTask(task.id)} className="btn-delete task-btn" >
                    <i className="fas fa-trash-alt" ></i>
                </button>
                <button onClick={(e) => findItem(task.id)} className="btn-edit task-btn" >
                    <i className="fas fa-pen" ></i>
                </button>
            </div>
        </li>
    )
}
