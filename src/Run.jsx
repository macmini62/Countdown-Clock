import React, {useState, useEffect, useRef} from "react";
import "./Run.css";

export default function Test(){

    const [daysRemaining, setDaysRemaining] = useState(0);
    const [hoursRemaining, setHoursRemaining] = useState(0);
    const [minutesRemaining, setMinutesRemaining] = useState(0);
    const [secondsRemaining, setSecondsRemaining] = useState(0);
    let interval = useRef();

    useEffect(() => {

        const countdownDate = new Date("December 30, 2023 04:45:00");

        interval = setInterval(() => {
            const now = new Date().getTime();
            const timeRemaining = countdownDate - now;

            if(timeRemaining < -60000) {
                clearInterval(interval.current);
            }
            else{
                setDaysRemaining(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
                setHoursRemaining(Math.floor((timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
                setMinutesRemaining(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
                setSecondsRemaining(Math.floor((timeRemaining % (1000 * 60)) / 1000));
            }
        }, 1000);

        return() => {
            clearInterval(interval.current);
        };
        
    });

    const Timer =   <div className="timer--body flex flex-col items-center justify-between w-full h-full" >
                        {/* Days remaining */}
                        <section className="flex flex-col items-center w-[300px] h-1/6">
                            <div className="spinning--star relative flex justify-center w-full h-2/3">
                                <img src="src\images\x-mas-star.svg" alt="" className="star--logo w-[100px] h-[100px]"/>
                                <div className="days--rem absolute top-5 z-10 text-[red] text-6xl font-bold">
                                    {daysRemaining}
                                </div>
                            </div>
                            <div className="text-4xl text-[lightblue]">
                                {daysRemaining === 1 ? "Day left" : "Days left"}
                            </div>
                        </section>
                        {/* Clock Timer */}
                        <section className="flex items-center justify-evenly w-1/2 h-3/5 text-9xl font-bold">
                                <div className="flex flex-col items-center w-1/4 h-1/3">
                                    <div className="timer--hours flex items-center justify-center w-full h-2/3">
                                        {hoursRemaining < 10 ? `0${hoursRemaining}` : hoursRemaining}
                                    </div>
                                    <div className="text-3xl font-semibold mt-2">
                                        {hoursRemaining === 1 ? "Hour" : "Hours"}
                                    </div>
                                </div>
                                    <div className="pb-16">
                                        :
                                    </div>
                                <div className="flex flex-col items-center w-1/4 h-1/3 text-[red]">
                                    <div className="timer--hours flex items-center justify-center w-full h-2/3">
                                        {minutesRemaining < 10 ? `0${minutesRemaining}` : minutesRemaining}
                                    </div>
                                    <div className="text-3xl font-semibold mt-2">
                                        {minutesRemaining === 1 ? "Minute" : "Minutes"}
                                    </div>
                                </div>
                                    <div className="pb-16">
                                        :
                                    </div>
                                <div className="flex flex-col items-center w-1/4 h-1/3">
                                    <div className="timer--hours flex items-center justify-center w-full h-2/3">
                                        {secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining}
                                    </div>
                                    <div className="text-3xl font-semibold mt-2">
                                        {secondsRemaining === 1 ? "Second" : "Seconds"}
                                    </div>
                                </div>
                        </section>
                        {/* Bottom Section */}
                        <section className="flex justify-center items-center w-1/5 h-1/6 text-6xl font-semibold">   
                            Time Left!!
                        </section>
                    </div>

    const Countdown =   <div className="countdown--body w-full h-full flex items-center justify-center">
                            <div className="flex items-center justify-center h-[600px] w-[600px]">
                                <div className="rotate--circle flex items-center justify-center relative w-[550px] h-[550px] 
                                    rounded-full border-4 border-[#43aa43]">
                                <section className="text-[400px] font-semibold opacity-80 pb-10">
                                    {secondsRemaining}
                                </section>
                                </div>
                            </div>
                        </div>

    const Poster =  <div className="poster--body w-full h-full">
                        
                    </div>

    const [display, setDisplay] = useState();

    useEffect(() => {
        console.log("runned!");
        if(minutesRemaining >= 1){
            setDisplay(Timer);
        }
        else if(minutesRemaining === 0){
            setDisplay(Poster);
        }
        else if(minutesRemaining === -1){
            setDisplay(Poster);
        }
    },[secondsRemaining]);

    return (
        <div className="w-screen h-screen">
            {display}
        </div>
    );
};
 