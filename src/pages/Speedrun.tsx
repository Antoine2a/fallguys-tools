import React from 'react';
import VideoPanel from '../components/speedrun/VideoPanel';

function Speedrun() {
    return (
        <>
            <div className="flex-auto flex justify-center items-center bg-gradient-to-b from-orange-200 to-white h-full w-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg mb-5">Speedrun</h1>
                    <h2>
                        WIP - UNDER PROGRESS - PRIORITY: <strong>1</strong> (1 higher priority, 10 minor priority)
                    </h2>
                </div>
            </div>
            <div className="mt-10">
                <VideoPanel />
            </div>
        </>
    );
}

export default Speedrun;
