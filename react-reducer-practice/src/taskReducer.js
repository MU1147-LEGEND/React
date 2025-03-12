const reducer = (tasks, action) => {
    switch (action.type) {
        case "added": {
            return [
                ...tasks,
                { id: action.id, text: action.text, done: action.done },
            ];
        }
        case "changed": {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                }
                return t;
            });
        }
        case "deleted":
            return tasks.filter((t) => t.id !== action.id);
        default: {
            throw new Error("Invalid action type " + action.type);
        }
    }
};

export default reducer;