import React, {useState, useEffect, useRef} from "react";
import "./index.css";

export default function Countdown(){

    const [countdown, setCountdown] = useState(0);
    let interval = useRef();

    useEffect(() => {

        const newYear = new Date("January 1, 2024 00:00:00");  

        interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = newYear - now;
            
            if(timeRemaining < 0){
                clearInterval(interval.current);
            }
            else{
                setCountdown(Math.floor(timeRemaining % (1000 * 60) / (1000)));
            }

            return(() => {
                clearInterval(interval.current);
            })

        },1000)
    });

    return (
        <div className="countdown--body w-full h-full flex items-center justify-center">
            <div className="flex items-center justify-center h-[600px] w-[600px]">
                <div className="rotate--circle flex items-center justify-center relative w-[550px] h-[550px] 
                    rounded-full border-4 border-[#43aa43]">
                <section className="text-[400px] font-semibold opacity-80 pb-10">
                    {countdown}
                </section>
                </div>
            </div>
        </div>
    )
}

