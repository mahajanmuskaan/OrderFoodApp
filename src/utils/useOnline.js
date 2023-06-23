// Custom Hook to check the Internet connectivity

import { useState, useEffect } from "react";

const useOnline = () => {
    const [online, setOnline] = useState(true);

    const handleOnline = () => {
        setOnline(true);
    }

    const handleOffline = () => {
        setOnline(false);
    }


    useEffect(() => {
        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // Cleaning of eventListeners- cleanup method or unmounting
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }

    }, []);
    return online; // will return true or false
}

export default useOnline;