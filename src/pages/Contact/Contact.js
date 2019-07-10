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
                        <p>
                            <b className="jennyMcLean"> Jenny McLean</b> <br/>
                            contact@murraygrantofficial.com <br/>
                            +44 (0) 330 0242941
                        </p>
                        <div className="section__title">Media Enquiries</div>
                        <div className="Contact__media" id="media_enquiries">
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
                        <div className="section__title">Direct Enquiries</div>
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
