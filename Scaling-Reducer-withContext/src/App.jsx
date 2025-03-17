import { scan } from "react-scan"; // must be imported before React and React DOM
import React, { useReducer } from "react";
import Comp1 from "./components/Comp1";
import reducer from "./reducer";

const App = () => {
    const [tasks, dispatch] = useReducer(reducer, initialTasks);

    return (
        <>
            <Comp1 tasks={tasks} dispatch={dispatch} />
        </>
    );
};

const initialTasks = [
    { id: 0, text: "Chittagong lengta shah", done: true },
    { id: 1, text: "Sylhet Bal shah", done: false },
    { id: 2, text: "Taniar jamai", done: false },
];

export default App;

scan({
    enabled: false,
});
