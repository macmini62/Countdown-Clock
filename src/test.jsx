import React, {useState, useEffect, useRef} from "react";
import Timer from "./Timer";
import Countdown from "./Countdown";
import Poster from "./Poster";

export default function Test(){

    const [display, setDisplay] = useState(<Timer/>);
    
    let interval = useRef();

    const [minrem, setMinrem] = useState(0);
    const [secrem, setSecrem] = useState(0);

    useEffect(() => {
        const newYear = new Date("December 24, 2023 03:32:00");

        interval = setInterval(() => {
            let now = new Date().getTime();
            const timeInterval = newYear - now;
            
            if(timeInterval < 0){
                clearInterval(interval.current);
            }else{
                setMinrem(Math.floor(timeInterval % (1000 * 60 * 60) / (1000 * 60)));
                setSecrem(Math.floor(timeInterval % (1000 * 60) / (1000)));
            }
        })

        return() => {
            clearInterval(interval.current);
        }
    },[]);

    useEffect(() => {
        if(minrem > 1){
            setDisplay(prevDisplay => {
                return <Timer/>
            });
        }
        else if(minrem === 1){
            setDisplay(prevDisplay => {
                return <Countdown/>;
            });
        }
        else if(minrem === 0){
            setDisplay(prevDisplay => {
                return <Poster/>;
            })
        }
    },[]); //check on this dependency after adding display in it...


    return (
        <div className="w-screen h-screen">
            Minutes: {minrem} min Remaining
            <br/>
            Seconds: {secrem}s Remaining
            {display}
        </div>
    );
}
 