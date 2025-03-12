import React, { useState } from "react";
import Button from "./buttons/Button";

const Comp3 = ({ tasks, dispatch }) => {
    const [text, setText] = useState("");

    const addTask = () => {
        dispatch({
            type: "add",
            text: text,
            id: tasks.length,
            done: false,
        });
        setText("");
    };

    const checkTask = (task) => {
        dispatch({
            type: "check",
            task,
        });
        console.log(task);
    };

    const handleDeleteTask = (id) => {
        dispatch({
            type: "delete",
            id: id,
        });
    };

    const handleEditTask = (id) => {
        dispatch({
            type: "edit",
            id: id,
        });
    };

    return (
        <>
            <div className="bg-black/80 m-auto text-center w-10/12 text-white">
                <h1 className="text-3xl">Tourist spots to visit</h1>
                <div className="py-4">
                    <AddInput text={text} setText={setText} />
                    <Button
                        type={"add"}
                        onClick={() => {
                            text.trim() !== ""
                                ? addTask()
                                : alert("please add task");
                        }}
                    />
                    <br />
                    <div className="tasks pt-4">
                        {tasks.map((task) => {
                            return (
                                <div
                                    key={task.id}
                                    className="my-3 w-96 m-auto text-left flex justify-between items-center"
                                >
                                    <span>
                                        <input
                                            type="checkbox"
                                            name="done"
                                            id="done"
                                            checked={task.done}
                                            onChange={(e) => {
                                                checkTask({
                                                    ...task,
                                                    done: e.target.checked,
                                                });
                                            }}
                                        />
                                        <span>&nbsp;{task.text}</span>
                                    </span>
                                    <span>
                                        <Button
                                            type="Edit"
                                            onClick={() => {
                                                handleEditTask(task.id);
                                            }}
                                        />
                                        <Button
                                            type="delete"
                                            onClick={() => {
                                                handleDeleteTask(task.id);
                                            }}
                                        />
                                    </span>
                                </div>
                            );
                        })}
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
            className="text-black py-1.5 px-2 rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-blue-600"
            type="text"
            value={text}
            placeholder="Add a task"
            onChange={(e) => {
                setText(e.target.value);
            }}
        />
    );
}
