import React from "react";
import { useRef } from "react";
import { useState } from "react";

const App = () => {
    const [start, setStart] = useState();
    const [now, setNow] = useState(null);
    const [stop, setStop] = useState(false);
    const intervalId = useRef(null);

    let second = 0;

    function handleStartTimer() {
        setStop(false);
        setNow(Date.now());
        setStart(Date.now());
        clearInterval(intervalId.current);
        intervalId.current = setInterval(() => {
            setNow(Date.now());
        }, 100);
    }

    function handleStopTimer() {
        if (intervalId.current != null) {
            clearInterval(intervalId.current);
            setStop(!stop);
        } else {
            console.log("no interval running.");
        }
    }

    if (start != null && now != null) {
        second += (now - start) / 1000;
    }

    return (
        <div>
            <p>Second: {stop ? "0" : second}</p>
            <button onClick={handleStartTimer}>Start Timer</button>
            <button onClick={handleStopTimer}>Stop Timer</button>
        </div>
    );
};

export default App;
