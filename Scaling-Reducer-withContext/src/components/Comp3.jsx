import React, { useContext, useState } from "react";
import Button from "./buttons/Button";
import { TaskContext, TaskDispatchContext } from "../context/taskContext";

let inputStyle = "";
const Comp3 = () => {
    const [text, setText] = useState("");
    const [editText, setEditText] = useState("");
    const [edit, setEdit] = useState(null);
    // context and reducers
    const tasks = useContext(TaskContext);
    const dispatch = useContext(TaskDispatchContext);

    const addTask = () => {
        dispatch({
            type: "add",
            text: text,
            id: generateUUID(),
            done: false,
        });
        setText("");
    };

    const checkTask = (task) => {
        dispatch({
            type: "check",
            task,
        });
    };

    const handleDeleteTask = (id) => {
        dispatch({
            type: "delete",
            id: id,
        });
    };

    const handleEditTask = (task) => {
        dispatch({
            type: "edit",
            id: task.id,
            text: task.text,
        });
    };

    const addInputError = ()=>{
        if(!text){
            inputStyle = "ring-2 ring-red-500 bg-red-300";
        }
    }

    // AI generated random uuid generator code.
    function generateUUID() {
        // Public Domain/MIT
        let d = new Date().getTime(); //Timestamp
        let d2 =
            (typeof performance !== "undefined" &&
                performance.now &&
                performance.now() * 1000) ||
            0; //Time in microseconds since page-load or 0 if unsupported
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                let r = Math.random() * 16; //random number between 0 and 16
                if (d > 0) {
                    //Use timestamp until depleted
                    r = (d + r) % 16 | 0;
                    d = Math.floor(d / 16);
                } else {
                    //Use microseconds since page-load if supported
                    r = (d2 + r) % 16 | 0;
                    d2 = Math.floor(d2 / 16);
                }
                return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
            }
        );
    }
    // AI generated random uuid generator code.

    return (
        <>
            <div className="bg-black/80 m-auto text-center w-10/12 text-white">
                <h1 className="text-3xl">Tourist spots to visit</h1>
                <div className="py-4">
                    <AddInput text={text} setText={setText} />
                    <Button
                        type={"add"}
                        onClick={() => {
                            text.trim() !== "" ? addTask() : addInputError();
                        }}
                    />
                    <br />
                    <div className="tasks pt-4">
                        {tasks.length ? (
                            <>
                                {tasks.map((task) => {
                                    return (
                                        <div
                                            key={task.id}
                                            className="my-3 w-96 m-auto text-left flex justify-between items-center"
                                        >
                                            <div className="tasks">
                                                <input
                                                    type="checkbox"
                                                    name={task.text}
                                                    id={task.id}
                                                    checked={task.done}
                                                    onChange={() => {
                                                        checkTask({
                                                            ...task,
                                                            done: !task.done,
                                                        });
                                                    }}
                                                />

                                                {edit === task.id ? (
                                                    <>
                                                        <input
                                                            className="text-black py-1.5 px-2 rounded-lg focus:outline-none
                                                    focus:ring-2 focus:ring-blue-600"
                                                            placeholder="Type updated task"
                                                            type="text"
                                                            value={editText}
                                                            onChange={(e) => {
                                                                setEditText(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <button
                                                            className="relative mx-2 px-4 py-1.5 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-300 text-black/95 active:bg-green-600 active:translate-y-[2px]"
                                                            onClick={() => {
                                                                handleEditTask({
                                                                    ...task,
                                                                    text: editText,
                                                                });

                                                                setEdit(!edit);
                                                            }}
                                                        >
                                                            Save
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span
                                                            className={
                                                                task.done
                                                                    ? "opacity-80 line-through"
                                                                    : "opacity-100"
                                                            }
                                                        >
                                                            {" "}
                                                            {task.text}{" "}
                                                        </span>
                                                        <button
                                                            className="relative mx-2 px-4 py-1.5 bg-orange-400 rounded-lg hover:bg-orange-500 transition-colors duration-300 text-black/95 active:bg-orange-600 active:translate-y-[2px]"
                                                            onClick={() => {
                                                                setEdit(
                                                                    task.id
                                                                );
                                                                setEditText(
                                                                    task.text
                                                                );
                                                            }}
                                                        >
                                                            Edit
                                                        </button>
                                                    </>
                                                )}
                                            </div>

                                            <Button
                                                type="delete"
                                                onClick={() => {
                                                    console.log(tasks);
                                                    handleDeleteTask(task.id);
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <div>
                                    <h1 className="text-2xl mb-4">
                                        No spots added yet.
                                    </h1>
                                    <p className="text-sm">
                                        Please add a spot to see it here
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comp3;

function AddInput({ text, setText }) {
    return (
        <input
            className={inputStyle + ""}
            type="text"
            value={text}
            placeholder="Add a task"
            onChange={(e) => {
                setText(e.target.value);
            }}
        />
    );
}
