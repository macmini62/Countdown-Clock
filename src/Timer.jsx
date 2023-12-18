import React from "react";

export default function Timer(){

    const date = new Date();

    return (
        <div className="flex flex-col justify-between w-1/2 h-2/3 border-2">
            <section className="flex justify-center items-center w-full h-3/5 border-2 text-9xl font-bold">
                {date.toLocaleTimeString()}
            </section>
            <section className="flex justify-center items-center w-full h-1/4 border-2 text-6xl font-semibold">
                <span className="text-[red] mr-5">1</span>   
                DAY TO GO!!
            </section>
        </div>
    )
}
