
import React, {useEffect} from 'react';
import './Map.scss';
import eMap from './../../../media/imgs/eMap.png';
import {cities} from './../../../api/masterclasses';

//animation time for location appearance
const t = 2000;
let allCities = [];
cities.forEach(arr=>{
    arr.forEach(city=>allCities.push(city.name))
});
allCities = allCities.sort();
let half = allCities.length/2;
let citiesLft = allCities.splice(0,half);
let citiesRgt = allCities;

export default function Map(){
    useEffect(()=>{
        const mapBox = document.querySelector('.Map');
        const minLength = getMinLength(cities);
        runLocations(mapBox, cities);
        setInterval(()=>{runLocations(mapBox, cities)},t*minLength);

    })
    return(
        <div className="Map">
                <img src={eMap} alt="world map"/>
                <div className="Map__cities_lft">
                    {
                        citiesLft.map(city=><span>{city}</span>)
                    }
                </div>
                <div className="Map__cities_rgt">
                    {
                        citiesRgt.map(city=><span>{city}</span>)
                    }
                </div>

            </div>
    )
}
function runLocations(parentEl,cities){
    const arrs = getArrOfArrsOfEqualLength(cities);
    arrs.forEach((arr,i)=>{
        ++i;
        arr.forEach((city,index)=>{
            const location = createLocationEl(city.name);
            parentEl.append(location);
            setTimeout(()=>{
                animateLocation(location, city);
            }, index*t+(i*800));
            setTimeout(()=>{
                removeLocation(location);
            },index*t+(i*800)+t)
        })
    })

}
function removeLocation(location){
    location.style.opacity = 0;
    setTimeout(()=>{
        location.remove();
    },500)

}
function animateLocation(location, city){
    location.style.left = city.coords.x;
    location.style.top = city.coords.y;
        const text = location.querySelector('.Map__text p');
        text.textContent = city.name;
        text.style.left = '0%';
        text.style.opacity = 1;
        text.style.transition = '.4s ease-out';
        const circles = location.firstElementChild;
        circles.style.display = 'block';
}
function getArrOfArrsOfEqualLength(arrParent){
    let minLength = getMinLength(arrParent);
    arrParent.forEach((arr, index, arrParent)=>{
        arr = arr.slice(0,minLength);
        arrParent.splice(index,1,arr);
    });
    return arrParent;
}
function getMinLength(arr){
    let lengths = arr.map(arr=>arr.length);
    return Math.min(...lengths);
}
function createLocationEl(name){
    let location = document.createElement('div');
    location.classList = 'Map__location '+name;
    location.innerHTML = `
                        <div class="Map__circles">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="Map__text">
                            <p></p>
                        </div>`;
    return location;
}
