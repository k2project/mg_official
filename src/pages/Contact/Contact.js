import React from 'react';
import DocumentMeta from 'react-document-meta';
import './Contact.scss';
import {appPages} from './../../api/appData';

import Page from './../../components/Page/Page';
import SocialMedia from './../../components/SocialMedia';


export default function Contact (){

    return(
        <DocumentMeta {...appPages.contact.meta}>
            <div className="Contact">
                <Page data = {appPages.contact.topContent}>
                    <section id="contact">
                        <div className="Contact__body">
                            <div>
                                For enquiries please contact
                                <br className="mobile"/><b> Jenny McLean</b>:
                            </div>
                            <div>
                                contact@murraygrantofficial.com <br/>
                                +44 (0) 330 0242941
                            </div>
                            <div id="tailormadeMedia">
                                For media enquiries please contact <br className="mobile"/><b> Tailormade Media</b>:</div>
                            <div>
                                Alex ( alex@thisistailormade.com ) <br/>
                                Amy ( amy@thisistailormade.com )
                            </div>
                            <div>
                                Getting in touch with Murray directly:
                            </div>
                            <div>
                                murray@murraygrantofficial.com
                            </div>
                            <SocialMedia/>
                        </div>
                    </section>
                </Page>
            </div>
        </DocumentMeta>
    )
}
