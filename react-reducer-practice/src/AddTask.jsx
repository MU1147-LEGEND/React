/* eslint-disable react/prop-types */
import React, { useState } from "react";



const AddTask = ({ dispatch, nextId }) => {
    const [text, setText] = useState("");

    const addTaskHandler = () => {
        if (text.trim() === "") {
            alert("Please enter a task");
            return;
        }

        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
            done: false,
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        addTaskHandler();
        setText("");
    };

    return (
        <>
            <form onSubmit={(e) => formSubmitHandler(e)}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddTask;
