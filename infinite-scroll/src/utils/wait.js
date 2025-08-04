export const wait = (timeOut) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeOut);
    });
};
