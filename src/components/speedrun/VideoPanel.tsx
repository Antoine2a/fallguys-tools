import React, { useState } from 'react';
import ResponsivePlayer from './ResponsivePlayer';

function VideoPanel() {
    const [url, setUrl] = useState('https://www.twitch.tv/'); // https//clips.twitch.tv/StrangeBlindingWitchHeyGuys-BuPDHJU-p_edInPX

    return (
        <div className="w-auto h-auto mx-[10%] bg-red-200">
            {/* <ResponsivePlayer /> */}
            <iframe title="clip twitch" src={url} height="300" width="500" />
        </div>
    );
}

export default VideoPanel;
