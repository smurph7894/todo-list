import React, {useState} from 'react'

const ListTasks = (props) => {
    const { tasks, deleteTask } = props;

    return (
        <>
            <form>
                {
                    tasks.map(
                        (eachTask, index) => {
                            const handleDeleteTask = (e) => {
                                e.preventDefault();
                                deleteTask(index)
                            }
                            return (
                                <div key={index}>
                                    {eachTask.task} 
                                    <input type="checkbox"/> 
                                    <input type="submit" onClick={handleDeleteTask} value="Delete"/>
                                </div>
                            )
                        }
                    )
                }
            </form>
        </>
    );
};

export default ListTasks;