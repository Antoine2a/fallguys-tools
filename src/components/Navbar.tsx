import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar as FlowNavbar, Dropdown, Avatar } from 'flowbite-react';

function Navbar() {
    return (
        <FlowNavbar fluid rounded>
            <FlowNavbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl dark:text-white font-fallGuys hidden md:inline">Fall Guys Tools</span>
                <span className="self-center whitespace-nowrap text-xl dark:text-white font-fallGuys md:hidden">FGT</span>
            </FlowNavbar.Brand>
            <div className="flex md:order-2">
                {/* <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown> */}
                <FlowNavbar.Toggle />
            </div>
            <FlowNavbar.Collapse>
                <FlowNavbar.Link href="/#/speedrun" active>
                    Speedrun
                </FlowNavbar.Link>
                <FlowNavbar.Link href="/#/factory">factory</FlowNavbar.Link>
                <FlowNavbar.Link href="/#/strategy">strategy</FlowNavbar.Link>
                <FlowNavbar.Link href="/#/challenges">challenges</FlowNavbar.Link>
                <FlowNavbar.Link href="/#/tmp-page">tmp-page</FlowNavbar.Link>
            </FlowNavbar.Collapse>
        </FlowNavbar>
    );
}

export default Navbar;
