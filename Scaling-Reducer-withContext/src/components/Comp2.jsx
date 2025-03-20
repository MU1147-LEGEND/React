import React from "react";
import Comp3 from "./Comp3";

const Comp2 = () => {
    return (
        <>
            <Comp3 /> {/* here no props passing, handled with context*/} 
        </>
    );
};

export default Comp2;
