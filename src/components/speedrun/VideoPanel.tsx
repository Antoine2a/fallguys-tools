import React, { useState } from 'react';
import { TwitchClip } from 'react-twitch-embed';
import { TikTok } from 'react-tiktok';
import { TwitterVideoEmbed } from 'react-twitter-embed';
import BilibiliEmbedRenderer from 'react-bilibili-embed-renderer';
import ResponsivePlayer from './ResponsivePlayer';
import img1 from '../../assets/images/img1.webp';
import RedditEmbed from '../videos/RedditEmbed';
// import 'react-bilibili-embed-renderer/dist/bilibili-embed-renderer.css';

function VideoPanel() {
    const [url, setUrl] = useState('StrangeBlindingWitchHeyGuys-BuPDHJU-p_edInPX');
    // https//clips.twitch.tv/StrangeBlindingWitchHeyGuys-BuPDHJU-p_edInPX

    return (
        // <div className="w-auto h-auto mx-[40%] bg-red-200">
        //     <ResponsivePlayer />
        //     <div className="flex flex-row">
        //         <TwitchClip clip={url} autoplay muted />
        //         <TikTok url="https://www.tiktok.com/@scout2015/video/6718335390845095173" />
        //         <TwitterVideoEmbed id="1593905159855382528" />
        //     </div>
        // </div>

        // Card container
        <div className="flex flex-wrap justify-center bg-red-200 w-full">
            {/* the card */}
            {/* Twitch Clip */}
            <div className="flex flex-col w-[45%] lg:w-[80%] aspect-video bg-white rounded-lg shadow-md m-6  overflow-hidden sm:w-52">
                {/* <div className="flex justify-center w-full px-5"> */}
                <TwitchClip clip={url} autoplay={false} muted className="w-full px-5" />
                <h2 className="text-center px-2 pb-5">Display Twitch Clip</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>
            {/* the card */}
            {/* YOUTUBE */}
            <div className="flex flex-col w-[45%] lg:w-[80%]  aspect-video bg-white rounded-lg shadow-md m-6 overflow-hidden sm:w-52">
                <ResponsivePlayer url="https://youtu.be/KY_QdbFl52Q" />

                <h2 className="text-center px-2 pb-5">Display Youtube</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>
            {/* the card */}
            {/* Streamable */}
            <div className="flex flex-col w-[45%] lg:w-[80%]  aspect-video bg-white rounded-lg shadow-md m-6  overflow-hidden sm:w-52">
                <ResponsivePlayer url="https://streamable.com/3f4v0j" />

                <h2 className="text-center px-2 pb-5">Display Streamable</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>
            {/* the card */}
            {/* Twitter */}
            <div className="flex flex-col w-[45%] lg:w-[80%] bg-white rounded-lg shadow-md m-6 overflow-hidden sm:w-52">
                <div className="flex justify-center">
                    <TwitterVideoEmbed id="1593905159855382528" />
                </div>
                <h2 className="text-center px-2 pb-5">Display Twitter</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>
            {/* the card */}
            {/* YOUTUBE */}
            <div className="flex flex-col w-[45%] lg:w-[80%]  aspect-video bg-white rounded-lg shadow-md m-6 overflow-hidden sm:w-52">
                <ResponsivePlayer url="https://youtu.be/KY_QdbFl52Q" />

                <h2 className="text-center px-2 pb-5">Display YT</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>
            {/* the card */}

            {/* the card */}
            {/* TIKTOK */}
            <div className="flex flex-col w-[45%] lg:w-[80%]  bg-white rounded-lg shadow-md m-6 overflow-hidden sm:w-52">
                <TikTok url="https://www.tiktok.com/@scout2015/video/6718335390845095173" />
                <h2 className="text-center px-2 pb-5">Display YT</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>

            {/* the card */}
            {/* Reddit */}
            <div className="flex flex-col w-[45%] lg:w-[80%]  bg-white rounded-lg shadow-md m-6 overflow-hidden sm:w-52">
                <RedditEmbed url="https://youtu.be/KY_QdbFl52Q" />
                <h2 className="text-center px-2 pb-5">Display Reddit</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>

            {/* the card */}
            {/* Bilibili */}
            <div className="flex flex-col w-[45%] lg:w-[80%]  bg-white rounded-lg shadow-md m-6 overflow-hidden sm:w-52">
                <BilibiliEmbedRenderer aid="3787944" />
                <h2 className="text-center px-2 pb-5">Display Bilibili</h2>
                <p className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</p>
            </div>
        </div>
    );
}

// https://www.bilibili.com/video/BV1gK4y1u7WY
// https://www.bilibili.com/video/av3787944/?zw aid: 3787944
export default VideoPanel;
