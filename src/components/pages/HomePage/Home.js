import React from 'react';
import HomeSection from '../../HomeSection';
import {sectionOneObj, sectionTwoObj, sectionThreeObj} from './Data';
import Plans from '../../Plans';


const Home = () => {
    return (
        <div>
            <HomeSection {...sectionOneObj}/>
            <HomeSection {...sectionTwoObj}/>
            <HomeSection {...sectionThreeObj}/>
            <Plans/>
        </div>
    )
}

export default Home;