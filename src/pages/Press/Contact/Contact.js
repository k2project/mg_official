import React from 'react';
import './Contact.scss';
import SocialMedia from './../../../components/SocialMedia';


export default function Contact (){

    return(

        <div className="Contact" id="contact">
            <div className="section__title">Contact</div>
            <div className="Contact__body">
                <div>For enquiries please contact <br/><b>Jenny McLean</b>:</div>
                <div>
                    contact@murraygrantofficial.com <br/>
                    +44 (0) 330 0242941
                </div>
                <div>For media enquiries please contact <br/><b>Tailormade Media</b>:</div>
                <div>
                    Alex (alex@thisistailormade.com) <br/>
                    Amy (amy@thisistailormade.com)
                </div>
                <div>To get in touch with Murray directly:</div>
                <div>
                    murray@murraygrantofficial.com
                </div>
            </div>
            <SocialMedia/>
        </div>

    )
}
