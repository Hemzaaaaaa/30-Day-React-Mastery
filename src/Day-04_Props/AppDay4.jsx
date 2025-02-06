/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import TodoList from './components/TodoList';

const AppDay4 = () => {

    const [tasks, setTasks] = useState(["Learn React", "Build a project"]);

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoList tasks={tasks} />
    </div>
  )
}

export default AppDay4
