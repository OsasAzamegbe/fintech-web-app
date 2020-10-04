import React from 'react';
import HomeSection from '../../HomeSection';
import {
    sectionTwoObj, 
} from './Data';
import Plans from '../../Plans';


const Products = () => {
    return (
        <div>
            <HomeSection {...sectionTwoObj}/>
            <Plans/>            
        </div>
    )
}

export default Products;