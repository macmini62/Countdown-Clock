import React from "react";

export default function Countdown(){
    return (
        <div className="flex items-center justify-center h-[600px] w-[600px] border-2">
            <div 
                className="rotate--circle flex items-center justify-center relative w-[500px] h-[500px] rounded-full border-2
                "
            >
                <section className="rotate--line absolute top-0 left-0 h-1/2 w-1/2 rounded-tl-full border-r-2 border-[#000000]
                opacity-50">

                </section>
                <section className="text-[350px] font-semibold opacity-70">
                    10
                </section>
            </div>
            
        </div>
    )
}

