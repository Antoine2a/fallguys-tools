import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleUtils } from '../utils';

const classes: StyleUtils.TcssClasses = {
    navDefault: 'flex items-center justify-center fixed top-8 lg:top-5 left-0 right-0 transition-all duration-300',
    navSticky: 'bg-white/80 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex items-center h-[9vh] fixed top-0 left-0 right-0 opacity-100 z-[100] shadow-sm shadow-slate-100',
    navContainer: ' w-[85vw] xl:w-[95vw] m-auto',
};

function Navbar() {
    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 180) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        };
    }, []);

    return (
        <header className={`${classes.navDefault} ${navState && classes.navSticky}`}>
            <nav className={StyleUtils.classNames('flex items-center justify-between', classes.navContainer)}>
                <NavLink to="/" className="flex items-center">
                    <h1 className="font-fallGuys">FGTools</h1>
                </NavLink>
                <ul className="flex items-center gap-7">
                    <li>
                        <NavLink to="/speedrun" className="text-lg text-slate-900">
                            Speedrun
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/map-creator" className="text-lg text-slate-900">
                            MapCreator
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/strategy" className="text-lg text-slate-900">
                            Strategy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tournaments" className="text-lg text-slate-900">
                            Tournaments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/challenges" className="text-lg text-slate-900">
                            Challenges
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tmp-page" className="text-lg text-slate-900">
                            TmpTab
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
