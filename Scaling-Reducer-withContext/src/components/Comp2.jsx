import React from "react";
import Comp3 from "./Comp3";

const Comp2 = ({ tasks, dispatch }) => {
    return (
        <>
            <Comp3 tasks={tasks} dispatch={dispatch} />
        </>
    );
};

export default Comp2;
