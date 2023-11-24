import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTask(newTask);
        setNewTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            placeholder="Agrega una nueva tarea"
            />
            <button type="submit">Agregar tarea</button>
        </form>
    );
};

export default AddTaskForm;