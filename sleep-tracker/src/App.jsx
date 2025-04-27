import React, { useEffect, useState } from "react";

const App = () => {
    const STORAGE_KEY = "sleepTimes";
    const FAJR_STORAGE_KEY = "fajrTimes";
    const EXPIRATION_DAYS = 7;
    const [sleepTimes, setSleepTimes] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (storedData) {
            const now = new Date().getTime();
            const storedTime = storedData.timestamp;
            const sevenDays = EXPIRATION_DAYS * 24 * 60 * 60 * 1000;
            if (now - storedTime < sevenDays) {
                return storedData.sleepTimes;
            } else {
                localStorage.removeItem(STORAGE_KEY);
            }
        }
        return initialSleepTime;
    });
    const [fajrTimes, setFajrTimes] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem(FAJR_STORAGE_KEY));
        if (storedData) {
            const now = new Date().getTime();
            const storedTime = storedData.timestamp;
            const sevenDays = EXPIRATION_DAYS * 24 * 60 * 60 * 1000;
            if (now - storedTime < sevenDays) {
                return storedData.fajrTimes;
            } else {
                localStorage.removeItem(FAJR_STORAGE_KEY);
            }
        }
        return initialFajrTime;
    });

    // Save sleepTimes to localStorage
    useEffect(() => {
        const dataToStore = {
            sleepTimes,
            timestamp: new Date().getTime(),
        };
        const fajrDataStore = {
            fajrTimes,
            timestamp: new Date().getTime(),
        };
        localStorage.setItem(FAJR_STORAGE_KEY, JSON.stringify(fajrDataStore));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
    }, [sleepTimes, fajrTimes]);

    const handleTimeChange = (day, value, when) => {
        when === "sleep"
            ? setSleepTimes((prev) => ({
                  ...prev,
                  [day]: value,
              }))
            : setFajrTimes((prev) => ({
                  ...prev,
                  [day]: value,
              }));
    };

    return (
        <>
            <section>
                <h1 className="py-6 text-3xl md:text-4xl w-full m-auto text-center">
                    Sleep & Prayer Tracker
                </h1>
                <div className="w-[85%] m-auto py-4 overflow-auto">
                    <table className="w-full overflow-auto flex lg:table">
                        <tr>
                            <th>
                                <span>Day / Task</span>
                            </th>
                            <th>Saturday</th> <th>Sunday</th> <th>Monday</th>{" "}
                            <th>Tuesday</th> <th>Wednesday</th>{" "}
                            <th>Thursday</th> <th>Friday</th>
                        </tr>

                        <tr>
                            <td>Sleep</td>
                            {Object.entries(sleepTimes).map((time) => {
                                console.log(time[1]);
                                return (
                                    <td key={time}>
                                        <input
                                            type="time"
                                            name=""
                                            id=""
                                            value={time[1]}
                                            onChange={(e) => {
                                                handleTimeChange(
                                                    time[0],
                                                    e.target.value,
                                                    "sleep"
                                                );
                                            }}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            <td>Fajr</td>
                            {Object.entries(fajrTimes).map((time) => {
                                console.log(time[1]);
                                return (
                                    <td key={time}>
                                        <input
                                            type="time"
                                            name=""
                                            id=""
                                            value={time[1]}
                                            onChange={(e) => {
                                                handleTimeChange(
                                                    time[0],
                                                    e.target.value,
                                                    "fajr"
                                                );
                                            }}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    </table>
                </div>
            </section>
        </>
    );
};

const initialSleepTime = {
    sat: "",
    sun: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
};
const initialFajrTime = {
    sat: "",
    sun: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
};

export default App;
