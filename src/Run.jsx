import React, {useState, useEffect, useRef} from "react";
import Timer from "./timer/Timer.jsx";
import Countdown from "./countdown/Countdown.jsx";
import Poster from "./poster/Poster.jsx";

export default function Test(){

    const [display, setDisplay] = useState(<Timer/>);
    
    let interval = useRef();

    const [minrem, setMinrem] = useState(0);
    const [secrem, setSecrem] = useState(0);

    useEffect(() => {
        const newYear = new Date("December 29, 2023 03:10:00");

        interval = setInterval(() => {
            let now = new Date().getTime();
            const timeInterval = newYear - now;
            
            if(timeInterval < -60000){
                clearInterval(interval.current);
            }else{
                setMinrem(Math.floor(timeInterval % (1000 * 60 * 60) / (1000 * 60)));
                setSecrem(Math.floor(timeInterval % (1000 * 60) / (1000)));
            }
        });

        return() => {
            clearInterval(interval.current);
        };

    },[]);

    useEffect(() => {
        console.log("runned!");
        if(minrem >= 1){
            setDisplay(<Timer/>);
        }
        else if(minrem === 0){
            setDisplay(<Countdown/>);
        }
        else if(minrem === -1){
            setDisplay(<Poster/>);
        }
    },[minrem]);

    return (
        <div className="w-screen h-screen">
            {/* min rem: {minrem} <br/>
            sec rem: {secrem} */}
            {display}
        </div>
    );
};
 