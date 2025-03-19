import React from "react";
import Button from "./buttons/Button";

const ConfirmDelete = ({ setConfirmationOpen, handleDeleteTask, id }) => {
    const confirmHandler = (bool) => {
        if (bool) {
            handleDeleteTask(id);
            setConfirmationOpen(false);
        } else {
            setConfirmationOpen(false);
        }
    };
    return (
        <>
            <div className="bg-black/80 h-full w-full absolute top-0 left-0 z-10">
                <div className="bg-stone-400 h-1/2 w-3/4 absolute top-0 left-0 right-0 bottom-0 m-auto text-center flex justify-center items-center rounded-2xl  animate-[grow_0.5s_ease-in-out]">
                    <h1 className="absolute top-12 text-3xl">
                        Are you sure ?{" "}
                    </h1>
                    <div className="flex gap-6">
                        <Button
                            type="save"
                            buttonText="No"
                            onClick={() => {
                                confirmHandler(false);
                            }}
                        />
                        <Button
                            type="delete"
                            buttonText="Yes"
                            onClick={() => {
                                confirmHandler(true);
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmDelete;
