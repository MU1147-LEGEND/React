import { scan } from "react-scan"; // must be imported before React and React DOM
import React, { useReducer } from "react";
import Comp1 from "./components/Comp1";
import reducer from "./reducer";
import { initialTasks } from "./initialTasks";
import { TaskContext, TaskDispatchContext } from "./context/taskContext";
import ConfirmDelete from "./components/ConfirmDelete";

const App = () => {
    const [tasks, dispatch] = useReducer(reducer, initialTasks);

    return (
        <>
            <TaskContext.Provider value={tasks}>
                <TaskDispatchContext.Provider value={dispatch}>
                    <Comp1 /> {/* here no props passing, handled with context*/}
                </TaskDispatchContext.Provider>
            </TaskContext.Provider>
        </>
    );
};

export default App;

scan({
    enabled: false,
});
