import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { StyleUtils } from '../../utils';

// //TODO npm i react-twitch-embed

const classes: StyleUtils.TcssClasses = {
    // playerWrapper: 'relative pt-60', // pt-[56.25%] Player ratio: 100/ (1280 / 720)
    // reactPlayer: 'absolute top-0 left-0',
    playerWrapper: 'relative pt-[56.25%] m-5 ', // pt-[56.25%] Player ratio: 100/ (1280 / 720)  Percentage ratio for 16:9
    reactPlayer: 'absolute top-0 left-0',
};

// ==================
// TWITTER, hoopsie Legends 10.21s FR xFantsu : https://twitter.com/xFantsu/status/159305159855382528
// Youtube 1, xFantsu, Bounce Party 36.26s, url : https://www.youtube.com/watch?v=34LsNLeBhxY
// TikTok , pixelPainters Sayyto, MissMusti, KennyShield_, Fougereシ,  https://www.tiktok.com/@fougere____/video/7157338215681199365?
// Youtube 2 , edouardo75_015, big fans : https://youtu.be/X9_RCYrahs0 47.96
// streamable : 123JLaney123 PartyPromenade(Glitchless) https://streamable.com/3f4v0j 52.49
// reddit : fruit chute : 7.47s, https://reddit.com/r/FallGuysGame/comments/ilsinx/how_to_win_fruit_chute/
// Bilibili : Bigs Fans Glitchless: 47.89 https://www.bilibili.com/video/BV1RG411g7mW by "海神星球"
// Twitch clip : L7L7, Slime Climb (Glitchless): 27.95
// https//clips.twitch.tv/StrangeBlindingWitchHeyGuys-BuPDHJU-p_edInPX
//
// react-player : YT & Streamble ok
// ==================

type ResponsivePlayerProps = {
    url: string;
};

function ResponsivePlayer({ url }: ResponsivePlayerProps) {
    return (
        // <div className={classes.playerWrapper}>
        //     <ReactPlayer className={classes.reactPlayer} url={url} width="100%" height="100%" controls />
        // </div>
        <div className="h-full w-full px-5">
            <ReactPlayer url={url} width="100%" height="100%" controls />
        </div>
    );
}

export default ResponsivePlayer;
