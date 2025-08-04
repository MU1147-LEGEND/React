const Loading = ({ ref }) => {
    return (
        <div ref={ref} className="loading py-1.5 bg-white">
            <div>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
};
export default Loading;
