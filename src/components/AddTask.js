import React, {useState} from 'react'

const AddTask = (props) => {
    const { onNewTask } = props;
    const [newTask, setNewTask] = useState("");

    const handleAddTask = (e) => {
        onNewTask({ task: newTask });
        e.preventDefault();
        console.log("handleAddTask works");
        setNewTask("")
    };

    return (
        <form onSubmit={handleAddTask}>
            <input
                onChange={ (e) => setNewTask(e.target.value)}
                value={newTask}
                style={{width: "250px", margin: "1rem 0rem"}}
                placeholder={"enter your new task here...."}
            />
            <input type="submit" value="add" />
        </form>
    );
};

export default AddTask