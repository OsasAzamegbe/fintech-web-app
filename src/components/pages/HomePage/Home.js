import React from 'react';
import HomeSection from '../../HomeSection'
import {sectionOneObj, sectionTwoObj, sectionThreeObj} from './Data'

const Home = () => {
    return (
        <div>
            <HomeSection {...sectionOneObj}/>
            <HomeSection {...sectionTwoObj}/>
            <HomeSection {...sectionThreeObj}/>
        </div>
    )
}

export default Home;