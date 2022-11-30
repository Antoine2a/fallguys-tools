import React, { useEffect } from 'react';

type RedditEmbedProps = {
    url: string;
};

function RedditEmbed({ url }: RedditEmbedProps) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//embed.redditmedia.com/widgets/platform.js';
        script.async = true;
        document.body.appendChild(script);
    });

    return (
        <div>
            <blockquote className="reddit-card" data-card-created="1553892582">
                <a href="https://reddit.com/r/FallGuysGame/comments/ilsinx/how_to_win_fruit_chute/">A k</a> from
                <a href="http://www.reddit.com/r/FallGuysGame">r/science</a>
            </blockquote>
        </div>
    );
}

export default RedditEmbed;
