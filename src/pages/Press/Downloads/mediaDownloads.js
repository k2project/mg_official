import React from 'react';

import image1_original from './../../../media/downloads/MurrayGrant_img1_original.jpg';
import image1_large from './../../../media/downloads/MurrayGrant_img1_large.jpg';
import image1_medium from './../../../media/downloads/MurrayGrant_img1_medium.jpg';
import image1_small from './../../../media/downloads/MurrayGrant_img1_small.jpg';

import image2_original from './../../../media/downloads/MurrayGrant_img2_original.jpg';
import image2_large from './../../../media/downloads/MurrayGrant_img2_large.jpg';
import image2_medium from './../../../media/downloads/MurrayGrant_img2_medium.jpg';
import image2_small from './../../../media/downloads/MurrayGrant_img2_small.jpg';


const image1 = {
    caption:'Murray Grant - official portrait.',
    orientation:'portrait',
    original:{
        src:image1_original,
        size:'2933 x 4400'
    },
    large:{
        src:image1_large,
        size:'1920 x 2880'
    },
    medium:{
        src:image1_medium,
        size:'1280 x 1920'
    },
    small:{
        src:image1_small,
        size:'640 x 960'
    },


}

const image2 = {
    caption:'Murray Grant - official portrait.',
    orientation:'landscape',
    original:{
        src:image2_original,
        size:'2933 x 4400'
    },
    large:{
        src:image2_large,
        size:'1920 x 2880'
    },
    medium:{
        src:image2_medium,
        size:'1280 x 1920'
    },
    small:{
        src:image2_small,
        size:'640 x 960'
    },


}


export const mediaDownloads = [

    image1,
    image2,

]
