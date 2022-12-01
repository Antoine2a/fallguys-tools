import React from 'react';

import VideoPanel from '../components/speedrun/VideoPanel';

function Speedrun() {
    return (
        <div className="flex-auto flex flex-col justify-center items-center bg-pattern-speedrun bg-auto bg-repeat h-fit w-auto ">
            <div className="flex flex-col items-center">
                <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg mb-5">Speedrun</h1>
                <h2>
                    WIP - UNDER PROGRESS - PRIORITY: <strong>1</strong> (1 higher priority, 10 minor priority)
                </h2>
            </div>

            <div className="flex flex-row mt-10 w-[90%] md:w-full bg-red-500">
                <VideoPanel />
            </div>
        </div>
    );
}
// KY_QdbFl52Q;
export default Speedrun;
