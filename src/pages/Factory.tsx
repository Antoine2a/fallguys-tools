import React from 'react';

function Factory() {
    return (
        <div className="flex-auto flex justify-center items-center bg-pattern-factory bg-auto  h-full w-auto">
            <div className="flex flex-col items-center">
                <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg mb-5">Factory</h1>
                <h2>
                    WIP - UNDER PROGRESS - PRIORITY: <strong>3</strong> (1 higher priority, 10 minor priority)
                </h2>
            </div>
        </div>
    );
}

export default Factory;
