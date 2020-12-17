import React from 'react';
export function randomInt(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function animateElsOnScroll(elsArr, cls){
    elsArr.forEach((el, index)=>{
        if(isElementInViewport(el)){
            setTimeout(()=>{
                el.classList.add(cls)
            }, index*100)
        }


    })

}

export function addTooltip(e, structureTooltip){
    let target = e.target;
    const tooltip = document.querySelector('.tooltip');
    if(!tooltip){
        //for gretting and controling the tooltip on scroll
        target.closest('.project').classList.add('on_hover');
        let tooltipEl = document.createElement('div');
        tooltipEl.className = 'tooltip';
         structureTooltip(tooltipEl);

        document.body.append(tooltipEl);

        let coords = target.closest('.project').getBoundingClientRect();
        let top = coords.top + target.offsetHeight ;
        tooltipEl.style.top = top + 'px';
    }


}
export function removeTooltip(e,tooltipEl){
    if (tooltipEl) {
        e.target.closest('.project').classList.remove('on_hover');
        tooltipEl.remove();
     }
}

export function splitWord(word){
    return word.split('').map(letter=><span key={'split_word__'+letter}>{letter}</span>)
}

export function selectNavLink(links){

    let path = window.location.href
                .split('/')
                .filter(el=>el.length>1) //get rid of ""
                .pop();
    if(path.includes('#')){
        path = path.split('#')
                .filter(el=>el.length>1)
                .pop();
    }
    links.forEach(link=>{
        link.classList.remove('selected');
        if(link.textContent.toLowerCase().trim() === path){
            link.classList.add('selected');
        }
    })
}

//handle swipping and sliding with key arrows
export function slideToRight(arr, el, index,cb){
    ++index;
    if(index>arr.length-1){
        index = 0;
    }
    cb(index);
    if(el){
        el.classList.add('right');
    }
}
export function slideToLeft(arr, el, index,cb){
    --index;
    if(index<0){
        index = arr.length-1;
    }
    cb(index);
    if(el){
        el.classList.add('left');
    }
}
export function handleTouchStart(e, stateData) {
    const firstTouch = e.touches[0] || e.originalEvent.touches[0];
    // xDown = firstTouch.clientX;
    stateData.setxDown(firstTouch.clientX);
    // yDown = firstTouch.clientY;
    stateData.setyDown(firstTouch.clientY);
};

export function handleTouchMove(e, stateData) {
    const {arr, el, xDown, yDown, setxDown, setyDown, currentIndex, setCurrentIndex} = stateData;
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            console.log('slide rgt')
            slideToRight(arr, el, currentIndex,setCurrentIndex)
        } else {
            console.log('slide lft')
            slideToLeft(arr, el, currentIndex,setCurrentIndex)
        }
    }

    // /* reset values */
    // xDown = null;
    setxDown(null);
    // yDown = null;
    setyDown(null);
};
//handle arrows
export function slidingUsingArrowsKeys(e, stateData){
    const {arr, el, rightKey, leftKey,currentIndex, setCurrentIndex} = stateData;
    if (e.code === 'ArrowLeft' && leftKey) {
        e.preventDefault();
        // left arrow
        slideToLeft(arr, el, currentIndex,setCurrentIndex)
    }
    if (e.code === 'ArrowRight' && rightKey) {
        e.preventDefault();
        // right arrow
        slideToRight(arr, el, currentIndex,setCurrentIndex)
    }

}
