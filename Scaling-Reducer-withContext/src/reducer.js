function reducer(tasks, action) {
    switch (action.type.toUpperCase()) {
        case "ADD": {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: action.done,
                },
            ];
        }
        case "CHECK": {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }

        case "EDIT": {
            return tasks.map((t) => {
                if (t.id === action.id) {
                    return {
                        ...t,
                        text: action.text,
                    };
                } else {
                    return t;
                }
            });
        }
        case "DELETE": {
            console.log(`task id ${action.id} deleted`);
            return tasks.filter((t) => {
                return t.id !== action.id;
            });

            // return tasks;
        }
        case "default": {
            console.log("Default");
        }
    }
}

export default reducer;
