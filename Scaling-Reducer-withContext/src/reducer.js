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
            console.log("Edit");
            break;
        }
        case "DELETE": {
            console.log("Deleted");
            break;
        }
        case "default": {
            console.log("Default");
        }
    }
}

export default reducer;
