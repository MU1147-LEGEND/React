import React from "react";
import Comp2 from "./Comp2";

const Comp1 = () => {
    return (
        <>
            <Comp2 /> {/* here no props passing, handled with context*/}
        </>
    );
};

export default Comp1;
