import React from "react";
import AddTask from "./AddTask";
import TaskList from "../TaskList";
import reducer  from "../src/taskReducer";

const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];

let nextId = initialTasks.length;

const App = () => {
    // const [tasks, setTasks] = React.useState(initialTasks);
    const [tasks, dispatch] = React.useReducer(reducer, initialTasks);

    const handleChangeTask = (task) => {
        // const updatedTasks = tasks.map((t) => {
        //     if (t.id === task.id) {
        //         return task;
        //     }
        //     return t;
        // });
        // setTasks(updatedTasks);

        dispatch({
            type: "changed",
            task: task,
        });
    };

    const handleDelete = (id) => {
        // const afterDelete = tasks.filter((t) => {
        //     return t.id !== id;
        // });
        // setTasks(afterDelete);
        dispatch({
            type: "deleted",
            id: id,
        });
    };

    return (
        <>
            <p>Prague itinerary</p>
            <AddTask dispatch={dispatch} nextId={nextId} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                handleDelete={handleDelete}
            />
        </>
    );
};

export default App;
