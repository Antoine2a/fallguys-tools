import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../data';
import banner from '../assets/images/bannerBackgroundFooter.png';

function Footer() {
    const { titles, links, socialLinks } = footerData;
    return (
        <div className=" h-fit-content flex-none">
            <footer className="bg-footer-banner bg-cover ">
                {/* //TODO: just display contact grid of logos, lot of refactor code to do but let's do it later, footer is not important */}
                <div className="backdrop-blur-xxs pt-7 pb-4  text-shadow-border-black text-slate-100 ">
                    <div className="grid items-center grid-cols-3 justify-items-center">
                        {titles?.map((val) => (
                            <div key={val.id} className="grid items-center justify-items-center mb-2">
                                <h1 className="text-xl lg:text-base uppercase  font-fallGuys ">{val.title}</h1>
                            </div>
                        ))}
                        {links?.map((list) => (
                            <ul key={list.id} className="grid items-center justify-items-center gap-1">
                                {list?.content.map((val) => {
                                    const Icon = val?.icon;

                                    return Icon ? (
                                        <div key={val.id} className="flex gap-2 ">
                                            <Icon className="w-5 h-5 text-black txt-shadow-none" />
                                            <li className="font-mono text-sm sm:text-xs">{val.link}</li>
                                        </div>
                                    ) : (
                                        <div key={val.id}>
                                            <li className="font-mono text-sm sm:text-xs">{val.link}</li>
                                        </div>
                                    );
                                })}
                            </ul>
                        ))}
                    </div>
                    <div className="w-7/12 lg:w-[95vw] m-auto mt-3">
                        <div className="h-[0.1vh] bg-black/30 mt-5 mb-3 md:my-3" />
                        <div className="grid grid-cols-4 md:grid-cols-1 gap-4 text-center">
                            <div />
                            <div className="col-span-2 md:col-span-1 md:order-last">
                                <p className="text-xs md:text-center ">This site is not affiliated with MediaTonic in any way.</p>
                                <div className="md:hide" />
                                <p className="text-sm md:text-center ">
                                    © {new Date().getFullYear()}
                                    <span className="font-semibold"> Mediatonic Limited</span>. All rights reserved.
                                </p>
                                <p className="text-sm md:text-center ">All trademarks referenced herein are the properties of their respective owners. </p>
                            </div>
                            {/* <div className="self-center place-self-center md:col-start-1 md:pb-0">
                            <div className="flex items-center gap-3">
                                {socialLinks?.map((val, idx) => {
                                    const Icon = val.icon;
                                    return <Icon key={idx} className="w-5 h-5" />;
                                })}
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
