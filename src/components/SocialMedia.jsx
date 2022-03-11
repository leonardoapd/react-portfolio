import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://twitter.com/leonardoapd" target="_blank">
                <BsTwitter />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100014845626405" target="_blank">
                <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/lperdomoduran/" target="_blank">
                <BsInstagram />
            </a>
        </div>
    )
}

export default SocialMedia;
