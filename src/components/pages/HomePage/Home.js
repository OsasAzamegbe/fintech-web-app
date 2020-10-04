import React from 'react';
import HomeSection from '../../HomeSection';
import {
    sectionOneObj,
    sectionTwoObj, 
    sectionThreeObj,
    sectionFourObj,
} from './Data';
import Plans from '../../Plans';


const Home = () => {
    return (
        <div>
            <HomeSection {...sectionOneObj}/>
            <HomeSection {...sectionTwoObj}/>
            <HomeSection {...sectionThreeObj}/>
            <Plans/>
            <HomeSection {...sectionFourObj}/>
        </div>
    )
}

export default Home;