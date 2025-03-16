import React, { useState } from "react";
import Button from "./buttons/Button";

const Comp3 = ({ tasks, dispatch }) => {
    const [text, setText] = useState("");
    const [edit, setEdit] = useState(false);

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
        setEdit(!edit);
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
                                            name={
                                                task.text.slice(0, 3) + task.id
                                            }
                                            id={task.text.slice(0, 3) + task.id}
                                            checked={task.done}
                                            onChange={(e) => {
                                                checkTask({
                                                    ...task,
                                                    done: e.target.checked,
                                                });
                                            }}
                                        />
                                        <label
                                            htmlFor={
                                                task.text.slice(0, 3) + task.id
                                            }
                                        >
                                            &nbsp;{task.text}
                                        </label>
                                    </span>
                                    <span>
                                        <Button
                                            // key={task.id}
                                            type={edit? "save" : "edit"}
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
