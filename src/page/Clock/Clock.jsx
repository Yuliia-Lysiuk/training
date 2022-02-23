import { useEffect, useRef, useState } from "react";

export const Clock = () => {
     const [time, setTime] = useState(()=> new Date());

    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => setTime(new Date()), 1000);
        return () => {
            onButtonStop(); 
        }
    }, [time]);

    const onButtonStop = () => {
       clearInterval(intervalId.current) 
    }

    const onButtonStart = () => {
        setTime(new Date()); 
    }

    return (
        <>
            <p>{time.toLocaleTimeString()}</p>
            <button type="button" onClick={onButtonStop}>Stop</button>
            <button type="button" onClick={onButtonStart}>Start</button>
        </>)
}