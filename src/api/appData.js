import React from 'react';
import {NavHashLink} from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';


const canonical = 'http://www.murraygrantofficial.com/';
const description = 'Murray Grant is a creative entrepreneur with businesses ranging from training, corporate, production, agency, choreography and consulting in and around the UK and international market.';
const keywords = 'murray grant, international, choreography, masterclasses, dance, singing, acting, professional, musical theatre, stage, performing arts, musicals, mga, entrepreneur, creative,training, corporate, consulting';

const home = {
    meta : {
        title: "Murry Grant | Creative Entrepreneur",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:null,
        subtitle:null,
        content: null,
    },
}
const biography = {
    meta : {
        title: "Murry Grant | About",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:'Getting To Know Murray',
        subtitle:'Professional Background',
        content:null
    },
}
const choreography = {
    meta : {
        title: "Murry Grant | International Freelance Choreographer",
        description:'Murray Grant has been working as an international choreographer over the last 10 years, directing and choreographing cruise ship productions, International tours, European tours alongside corporate entertainment for some of the largest brands in the world. Murray specialises in Musical Theatre and Jazz styles.',
        canonical,
        meta: {
            name: {
                keywords:'murray grant, choreography, choreographer, freelance choreographer, international freelancer'
            }
        }
    },
    topContent : {
        title:'Creative Director & Choreographer',
        // title:'Choreography Projects',
        subtitle:'International Freelancer',
        video:{
            path:'video_choreography.mp4',
            sound:true
        },
        content: (<NavLink to="/contact"><div className="btn">Enquire Now!</div></NavLink>),
    },
}
const masterclasses = {
    meta : {
        title: "Murry Grant | Masterclasses",
        description:'Murray Grant has been offering masterclasses across the UK, Europe and Worldwide over the last 10 years, specialising in Jazz Technique, Musical Theatre Dance/Performance and Audition Technique. These masterclasses are aimed at students from the ages of 14+ ',
        canonical,
        meta: {
            name: {
                keywords:'murray grant,masterclasses, international masterclasses, jazz, musical theatre, audition techniques'
            }
        }
    },
    topContent : {
        title:'Masterclasses',
        subtitle:'Jazz, Musical Theatre & Audition Techniques',
        video:{
            path:'video_masterclasses.mp4',
            sound:false
        },
        content: (<NavLink to="/contact"><div className="btn">Enquire Now!</div></NavLink>),
    },
}
const endorsements = {
    meta : {
        title: "Murry Grant | Endorsements",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:"Don't Take Our Word For It...",
        subtitle:'Industry Endorsements',
        content: null,
    },
}
const press = {
    meta : {
        title: "Murry Grant | Press Release",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:'In The News',
        title:'Making Headlines',
        subtitle:'Press release',
        // content:(<NavHashLink to="/contact#press"><div className="btn">Press Enquiries</div></NavHashLink>),
    },
}
const contact = {
    meta : {
        title: "Murry Grant | Contact",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:'Getting In Touch',
        subtitle:'Contact & Press Enquiries',
        content: null
    },
}
const cookies = {
    meta : {
        title: "Murry Grant | Cookies Policy",
        description,
        canonical,
        meta: {
            name: {
                keywords
            }
        }
    },
    topContent : {
        title:'Cookies Policy',
        subtitle:'Updated on August 1, 2019',
        content: null
    },
}
export const appPages = {
    home,
    biography,
    choreography,
    masterclasses,
    endorsements,
    press,
    contact,
    cookies,
}
export const analiticsID = 'UA-143024184-1';
