import React from 'react';
import dashboard from '../assets/images/cristian-castillo-73pyV0JJOmE-unsplash.jpg';
import { StyleUtils } from '../utils';

const classes: StyleUtils.TcssClasses = {
    navContainer: ' w-[85vw] xl:w-[95vw] m-auto',
};
const styles: StyleUtils.TcssStyles = {
    dropShadowEmerald: { filter: `drop-shadow(0.1rem 0.1rem 1rem rgba(74 222 128 / 80%))` },
};

const homeData = {
    title: 'Fall Guys Tools',
    subtitle: 'Fall Guys Sandbox',
    text: 'We provide you many tools to help you improve in the game.',
    btn1: 'Get Started',
    btn2: 'Get Demo',
    img: dashboard,
};

function Home() {
    const { title, subtitle, text, btn1, btn2, img } = homeData;

    return (
        <div className="flex flex-colh-auto w-auto bg-pattern-home bg-auto bg-repeat">
            <div className={StyleUtils.classNames('grid items-start justify-items-center', classes.navContainer)}>
                <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
                    <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">{title}</h1>
                    <h1 className="text-6xl font-bold lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl text-black filter drop-shadow-lg">{subtitle}</h1>
                    <p className="text-base my-5 text-center sm-text-sm">{text}</p>
                    <div className="flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm-w-full">
                        <button type="button" className="button-emerald">
                            {btn1}
                        </button>
                        <button type="button" className="button-light">
                            {btn2}
                        </button>
                    </div>
                </div>
                <div className="flex items-centers justify-center mb-11">
                    <img src={img} alt="dashboard/img" className="h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] smx:object-contain " style={styles.dropShadowEmerald} />
                </div>
            </div>
        </div>
    );
}

export default Home;
