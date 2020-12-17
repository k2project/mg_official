import React  from 'react';

import facebook from './../media/icons/facebook.png';
import instagram from './../media/icons/instagram.png';
import linkedin from './../media/icons/linkedin.png';

export default function SocialMedia (){
    return(
        <div className="SocialMedia">
            <a href="https://www.linkedin.com/in/murrayonline" target="_blank"  rel="noopener noreferrer">
                <img src={linkedin} alt="Linked In"/>
            </a>
            <a href="https://www.facebook.com/murrayonline" target="_blank"  rel="noopener noreferrer">
                <img src={facebook} alt="Facebook"/>
            </a>
            {/* <a href="https://www.twitter.com/murraygrant85" target="_blank"  rel="noopener noreferrer">
                <img src={twitter} alt="Twitter"/>
            </a> */}
            <a href="https://www.instagram.com/murray_online/" target="_blank"  rel="noopener noreferrer">
                <img src={instagram} alt="Instagram"/>
            </a>
        </div>
    )
}
