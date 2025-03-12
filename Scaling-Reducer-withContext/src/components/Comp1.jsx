import React from "react";
import Comp2 from "./Comp2";

const Comp1 = ({ tasks, dispatch }) => {
    return (
        <>
            <Comp2 tasks={tasks} dispatch={dispatch} />
        </>
    );
};

export default Comp1;
