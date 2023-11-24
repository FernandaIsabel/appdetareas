import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Tarea 1'},
    { id: 2, title: 'Tarea 2'},
  ]);

  const addTask = newTask => {
    setTasks([...tasks, {id: tasks.length + 1, title: newTask }]);
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm addTask={addTask} />
    </div>
  );
};



export default App;
