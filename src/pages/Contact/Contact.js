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
                    <section className="Contact__section">
                        <div className="section__title">General Enquiries</div>
                        {/* <p><i>For general enquiries please contact:</i></p> */}
                        <p>
                            <b> Jenny McLean</b> <br/>
                            contact@murraygrantofficial.com <br/>
                            +44 (0) 330 0242941
                        </p>
                    </section>
                    <section id="media" className="Contact__section">
                        <div className="section__title">Media Enquiries</div>
                        <p>For press related enquiries please contact <i>Tailormade Media</i> team:</p>
                        <div className="Contact__media">
                            <p>
                                Amy Anderson Brown
                            </p>
                            <p>
                                amy@thisistailormade.com
                            </p>
                            <p>
                                Alex Schweitzer-Thompson
                            </p>
                            <p>
                                alex@thisistailormade.com
                            </p>
                            </div>
                    </section>
                    <section className="Contact__section ">
                        <div className="section__title">Direct Enquiries</div>
                        {/* <p><i>Getting in touch with Murray directly:</i></p> */}
                        <p className="murrayEmail">
                            murray@murraygrantofficial.com
                        </p>
                        <div>
                            <SocialMedia/>
                        </div>

                    </section>
                </Page>
            </div>
        </DocumentMeta>
    )
}
