import { useEffect, useState } from "react";

function useScrollPosition() {
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        function handleScroll() {
            setScrollX(window.scrollX);
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line 
    }, []);
    return [scrollX, scrollY];
}

export default useScrollPosition;