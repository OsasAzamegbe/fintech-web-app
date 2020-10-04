import React from 'react';
import HomeSection from '../../HomeSection';
import {
    sectionTwoObj, 
    sectionThreeObj,
} from './Data';
import Plans from '../../Plans';


const Products = () => {
    return (
        <div>
            <Plans/>
            <HomeSection {...sectionThreeObj}/>
            <HomeSection {...sectionTwoObj}/>
        </div>
    )
}

export default Products;