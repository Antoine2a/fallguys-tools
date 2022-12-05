import React from 'react';
import { Footer as FlowFooter } from 'flowbite-react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { SiDiscord } from 'react-icons/si';
import { version as appVersion } from '../../package.json';

function Footer() {
    return (
        <FlowFooter container>
            <div className="w-full text-center">
                <div className="w-full justify-between flex flex-col gap-2 items-center sm:flex-row  sm:gap-0">
                    <NavLink to="/" className="flex items-center">
                        <h1 className="font-fallGuys hidden md:inline">Fall Guys Tools ⚠️ v{appVersion}</h1>
                        <h1 className="font-fallGuys md:hidden">FGT ⚠️ v{appVersion}</h1>
                    </NavLink>
                    <FlowFooter.LinkGroup className="gap-2 md:gap-0">
                        {/* <FlowFlowFooter.Link href="#">About</FlowFlowFooter.Link> */}
                        <FlowFooter.Link href="#">FAQ</FlowFooter.Link>
                        <FlowFooter.Link href="#">About Me</FlowFooter.Link>
                        <FlowFooter.Link href="mailto:kennyshield.pro@gmail.com">Contact</FlowFooter.Link>
                    </FlowFooter.LinkGroup>
                    <div className="flex space-x-6 sm:mt-0 sm:justify-center">
                        <FlowFooter.Icon href="#" icon={BsTwitter} />
                        <FlowFooter.Icon href="#" icon={SiDiscord} />
                        <FlowFooter.Icon href="https://github.com/Antoine2a/fallguys-tools" icon={BsGithub} />
                    </div>
                </div>
                <FlowFooter.Divider className="my-4 lg:my-6" />
                <div>
                    <p className="text-sm">This site is not affiliated with MediaTonic in any way.</p>
                    <FlowFooter.Copyright
                        by="Mediatonic Limited. All rights reserved. All trademarks referenced herein are the properties of their respective owners."
                        year={new Date().getFullYear()}
                    />
                </div>
            </div>
        </FlowFooter>
    );
}
export default Footer;
