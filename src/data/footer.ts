import { IconType } from 'react-icons';
import { SiDiscord, SiTwitter, SiYoutube, SiTwitch, SiMaildotru } from 'react-icons/si';

type Tlinks = {
    id: string;
    content: {
        id: string;
        link: string;
        icon?: IconType;
        url?: string;
    }[];
};

type Tfooter = {
    titles: {
        id: string;
        title: string;
    }[];
    links: Tlinks[];
    socialLinks: { id: string; icon: IconType; url?: string }[];
};

const footerData: Tfooter = {
    titles: [
        { id: 'foot_titles_1', title: 'About' },
        { id: 'foot_titles_2', title: 'FAQ' },
        { id: 'foot_titles_3', title: 'Contact' },
    ],
    links: [
        {
            id: 'foot_links_1',
            content: [{ id: 'link_content_1', link: 'About Me' }],
        },
        {
            id: 'foot_links_2',
            content: [],
        },
        {
            id: 'foot_links_3',
            content: [
                // { id: 'contact_twitter', link: 'MrPrart', icon: SiTwitter },
                // { id: 'contact_youttube', link: 'KennyShield', icon: SiYoutube },
                { id: 'contact_discord', link: 'KennyShield#1582', icon: SiDiscord },
                { id: 'contact_email', link: 'kennyshield.pro@gmail.com', icon: SiMaildotru },
                // { id: 'contact_twitch', link: 'KennyShield', icon: SiTwitch },
            ],
        },
    ],
    socialLinks: [
        { id: 'fgt_twitter', icon: SiTwitter },
        { id: 'fgt_youtube', icon: SiYoutube },
        { id: 'foot_fgt_socialLink_discord', icon: SiDiscord },
    ],
};

export default footerData;
