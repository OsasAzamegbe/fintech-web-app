import React from 'react';
import HomeSection from '../../HomeSection';
import {
    sectionTwoObj, 
} from './Data';
import Button from '../../Button';
import '../Footer/Footer.css';


const Products = () => {
    return (
        <div>
            <section className='footer-container footer-subscription sign-up-section'>
                <p className='footer-subscription-heading'>
                Sign Up
                </p>
                <div className='input-areas'>
                <form>
                    <input
                    className='footer-input'
                    name='name'
                    type='text'
                    placeholder='Your Name'
                    />
                    <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    />
                    <input
                    className='footer-input'
                    name='password'
                    type='password'
                    placeholder='New Password'
                    />
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                </form>
                </div>
            </section>
            <HomeSection {...sectionTwoObj}/>          
        </div>
    )
}

export default Products;