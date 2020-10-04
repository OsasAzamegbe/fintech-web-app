import React from 'react';
import HomeSection from '../../HomeSection';
import {
    sectionTwoObj, 
    sectionThreeObj,
} from './Data';
import Plans from '../../Plans';


const Home = () => {
    return (
        <div>
            <HomeSection {...sectionTwoObj}/>
            <HomeSection {...sectionThreeObj}/>
            <Plans/>
        </div>
    )
}

export default Home;