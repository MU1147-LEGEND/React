import React from "react";
import "./button.css";

const Button = ({ type, onClick }) => {
    // const [edit, setEdit] = React.useState(false);

    // edit button
    if (type.toLowerCase() === "edit") {
        return (
            <button
                className="relative mx-2 px-4 py-1.5 bg-orange-400 rounded-lg hover:bg-orange-500
            transition-colors duration-300 text-black/95 active:bg-orange-600 active:translate-y-[2px]"
                onClick={onClick}
            >
                Edit
            </button>
        );
    }

    // delete button
    if (type.toLowerCase() === "delete") {
        return (
            <button
                className="relative mx-2 px-4 py-1.5 bg-red-400 rounded-lg hover:bg-red-500 transition-colors duration-300 text-black/95 active:bg-red-600 active:translate-y-[2px]"
                onClick={onClick}
            >
                Delete
            </button>
        );
    }

    // save button
    if (type.toLowerCase() === "save" || type.toLowerCase() === "add") {
        return (
            <button
                className="relative mx-2 px-4 py-1.5 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-300 text-black/95 active:bg-green-600 active:translate-y-[2px]"
                onClick={onClick}
            >
                {/*  manually capitalize the first letter  */}
                {/* {type === "save" ? "Save" : "Add"} */}
                {/* capitalize the first letter using JS */}
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
        );
    }
};

export default Button;
