import React from 'react';
import HomeSection from '../../HomeSection';
import {sectionOneObj, sectionTwoObj, sectionThreeObj} from './Data';
import Pricing from '../../Pricing';


const Home = () => {
    return (
        <div>
            <HomeSection {...sectionOneObj}/>
            <HomeSection {...sectionTwoObj}/>
            <HomeSection {...sectionThreeObj}/>
            <Pricing/>
        </div>
    )
}

export default Home;