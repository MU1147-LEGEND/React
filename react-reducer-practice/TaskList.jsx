/* eslint-disable react/prop-types */
import React from "react";

const TaskList = ({ tasks, onChangeTask, handleDelete }) => {
    return (
        <>
            {tasks.map((task) => {
                return (
                    <div key={task.id}>
                        <Task
                            task={task}
                            onChangeTask={onChangeTask}
                            handleDelete={handleDelete}
                        />
                    </div>
                );
            })}
        </>
    );
};

const Task = ({ task, onChangeTask, handleDelete }) => {
    const [editTask, setEditTask] = React.useState(false);

    const handleEdit = () => {
        setEditTask((editTask) => !editTask);
    };

    // edit and save operation
    let taskContent;
    if (editTask) {
        taskContent = (
            <>
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                        onChangeTask({ ...task, text: e.target.value });
                    }}
                />
                <button onClick={handleEdit}>Save</button>
            </>
        );
    } else {
        taskContent = (
            <>
                <span>{task.text}</span>
                <button onClick={handleEdit}>Edit</button>
            </>
        );
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) =>
                    onChangeTask({ ...task, done: e.target.checked })
                }
            />

            <span>{taskContent}</span>

            {/* delete operation */}
            <button
                onClick={() => {
                    handleDelete(task.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default TaskList;
