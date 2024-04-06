import React from 'react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ post }) => {
    const shareUrl = `https://yashblog.vercel.app/#/post/${post._id}`;
    const title = post.title;

    return (
        <div className='flex gap-8 my-12'>
            <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button"
            >
                <FacebookIcon
                    size={32}
                    round 
                />
            </FacebookShareButton>

            <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
            >
                <TwitterIcon
                    size={32}
                    round 
                />
            </TwitterShareButton>

            <LinkedinShareButton
                url={shareUrl}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className="Demo__some-network__share-button"
            >
                <LinkedinIcon
                    size={32}
                    round 
                />
            </LinkedinShareButton>

            <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    );
};

export default ShareButtons;

