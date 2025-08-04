import { useEffect } from "react";
import { useRef } from "react";

const Circle = () => {
    const circleRef = useRef(null);
    const observer = new IntersectionObserver((items) => {
        const circle = items[0];

        if (circle.isIntersecting) {
            console.log("Circle is visible");
            observer.disconnect();
        } else {
            console.log("Circle is not visible");
        }
    });

    useEffect(() => {
        observer.observe(circleRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    // scroll to top when init
    window.onload = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return <div ref={circleRef} id="circle"></div>;
};
export default Circle;
