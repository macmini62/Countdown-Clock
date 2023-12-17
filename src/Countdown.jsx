import React from "react";

export default function Timer(){
    return (
        <div className="relative flex items-center justify-center h-[500px] w-[500px] rounded-full border-2">
            <section className="absolute top-0 left-0 h-1/2 w-1/2 rounded-tl-full border-2">

            </section>
            <section className="text-[350px] font-semibold absolute opacity-70">
                10
            </section>
        </div>
    )
}

