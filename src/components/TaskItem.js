import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <li>
            <span>{task.title}</span>
            <button>Borrar</button>
        </li>
    );
};

export default TaskItem;