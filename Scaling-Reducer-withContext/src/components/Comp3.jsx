import React, { useContext, useState } from "react";
import Button from "./buttons/Button";
import { TaskContext, TaskDispatchContext } from "../context/taskContext";
import ConfirmDelete from "./ConfirmDelete";
import generateUUID from "../randomIDgenerator/randomUUID";

const Comp3 = () => {
    {
        /* here no props recieving, handled with context*/
    }
    const [text, setText] = useState("");
    const [editText, setEditText] = useState("");
    const [edit, setEdit] = useState(null);
    const [inputError, setInputError] = useState(false);
    const [editError, setEditError] = useState(false);
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
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

    const addInputError = () => {
        setInputError(true);
    };

    return (
        <>
            <div className="bg-black/80 m-auto text-center w-10/12 text-white">
                <h1 className="text-3xl">Tourist spots to visit</h1>
                <div className="py-4">
                    <AddInput
                        text={text}
                        setText={setText}
                        inputError={inputError}
                        setInputError={setInputError}
                    />
                    <Button
                        type={"add"}
                        buttonText={"Add"}
                        onClick={() => {
                            text.trim() !== "" ? addTask() : addInputError();
                        }}
                    />
                    <br />
                    <p className="text-red-400">
                        {inputError ? "Please add some text" : ""}
                    </p>
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
                                                            className={
                                                                editError
                                                                    ? "ring-2 ring-red-500 py-1.5 px-2 rounded-lg focus:outline-none"
                                                                    : "text-black py-1.5 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                            }
                                                            placeholder={
                                                                editError
                                                                    ? "Input should not empty"
                                                                    : "Edit task"
                                                            }
                                                            type="text"
                                                            value={editText}
                                                            onChange={(e) => {
                                                                setEditText(
                                                                    e.target
                                                                        .value
                                                                );
                                                                setEditError(
                                                                    false
                                                                );
                                                            }}
                                                        />
                                                        <Button
                                                            type="save"
                                                            buttonText={"Save"}
                                                            onClick={() => {
                                                                if (
                                                                    editText.trim() !==
                                                                    ""
                                                                ) {
                                                                    handleEditTask(
                                                                        {
                                                                            ...task,
                                                                            text: editText,
                                                                        }
                                                                    );

                                                                    setEdit(
                                                                        !edit
                                                                    );
                                                                } else {
                                                                    setEditError(
                                                                        true
                                                                    );
                                                                }
                                                            }}
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span
                                                            className={
                                                                task.done
                                                                    ? "opacity-80 line-through italic"
                                                                    : "opacity-100"
                                                            }
                                                        >
                                                            {" "}
                                                            {task.text}{" "}
                                                        </span>
                                                        <Button
                                                            type="edit"
                                                            buttonText={"Edit"}
                                                            onClick={() => {
                                                                setEdit(
                                                                    task.id
                                                                );
                                                                setEditText(
                                                                    task.text
                                                                );
                                                            }}
                                                        />
                                                    </>
                                                )}
                                            </div>

                                            <Button
                                                type="delete"
                                                buttonText={"Delete"}
                                                onClick={() => {
                                                    setTaskToDelete(task.id);
                                                    setConfirmationOpen(true);
                                                }}
                                            />
                                            {confirmationOpen &&
                                                taskToDelete === task.id && (
                                                    <ConfirmDelete
                                                        setConfirmationOpen={
                                                            setConfirmationOpen
                                                        }
                                                        handleDeleteTask={() => {
                                                            handleDeleteTask(
                                                                taskToDelete
                                                            );
                                                            setTaskToDelete(
                                                                null
                                                            );
                                                        }}
                                                        id={task.id}
                                                    />
                                                )}
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

function AddInput({ text, setText, inputError, setInputError }) {
    return (
        <input
            className={
                inputError
                    ? "ring-2 ring-red-500 py-1.5 px-2 rounded-lg focus:outline-none"
                    : "text-black py-1.5 px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            }
            type="text"
            value={text}
            placeholder="Add a task"
            onChange={(e) => {
                setText(e.target.value);
                setInputError(false);
            }}
        />
    );
}
