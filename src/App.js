import './App.css';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import React, {useEffect, useState} from 'react';

const key = "toDoListTasks"

function App() {
    const [tasks, setTasks] = useState( () => {
        const savedToDos = localStorage.getItem(key);
        const initalValue = JSON.parse(savedToDos);
        return initalValue || [];
    } );
    useEffect( () => {
        localStorage.setItem(key, JSON.stringify(tasks));
    }, [tasks]);
    //hooks must always come first and always happen, do not put a return beforehand.

    const onNewTask = (taskList) => {
        setTasks([taskList, ...tasks]);
    }

    const deleteTask = (index) => {
        const temp = [...tasks]

        temp.splice(index, 1)

        setTasks(temp)
    }

    return (
        <div>
            <AddTask onNewTask={onNewTask} />
            <ListTasks tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}  

export default App;
