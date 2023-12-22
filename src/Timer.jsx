import React, {useRef, useState, useEffect} from "react";
import "./index.css";

export default function Timer(){

    const [timerDays, setTimerDays] = useState(0);
    const [timerHours, setTimerHours] = useState(0);
    const [timerMinutes, setTimerMinutes] = useState(0);
    const [timerSeconds, setTimerSeconds] = useState(0);

    let interval = useRef();

    useEffect(() => {
        const countdownDate = new Date("December 24, 2023 23:00:00");

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if(distance < 0) {
                clearInterval(interval.current);
            }
            else{
                setTimerDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
                setTimerHours(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
                setTimerMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
                setTimerSeconds(Math.floor((distance % (1000 * 60)) / 1000));
            }
        }, 1000);

        return() => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className="timer--body flex flex-col items-center justify-between w-full h-full" >
            <section className="relative flex justify-center w-[300px] h-1/6">
                <img src="src\images\x-mas-star.svg" alt="" className="star--logo w-[100px] h-[100px]"/>
                <div className="absolute top-5 z-10 text-[red] text-6xl font-bold">
                    {timerDays}
                </div>
            </section>
            <section className="flex items-center justify-evenly w-1/2 h-3/5 text-9xl font-bold">
                    <div className="timer--hours flex items-center justify-center w-1/4 h-1/3">
                        {timerHours < 10 ? `0${timerHours}` : timerHours}
                    </div>
                        <div className="pb-8">
                            :
                        </div>
                    <div className="timer--minutes flex items-center justify-center w-1/4 h-1/3 text-[red]">
                        {timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes}
                    </div>
                        <div className="pb-8">
                            :
                        </div>
                    <div className="times--seconds flex items-center justify-center w-1/4 h-1/3">
                        {timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}
                    </div>
            </section>
            <section className="flex justify-center items-center w-1/5 h-1/6 text-6xl font-semibold">   
                {timerDays === 1 ? "Day To Go!!" : "Days To Go!!"}
            </section>
        </div>
    )
}
