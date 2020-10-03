import React from 'react';
import HomeSection from '../../HomeSection'
import {homeObjOne} from './Data'

const Home = () => {
    return (
        <HomeSection {...homeObjOne}/>
    )
}

export default Home;