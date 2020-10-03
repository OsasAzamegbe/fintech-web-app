import React from 'react';
import {Link} from 'react-router-dom';
import Button from './Button'
import './HomeSection.css'


const HomeSection = ({
    lightBg, topLine, lightText, lightTextDesc, headLine, description, buttonLabel, img, alt, imgStart
}) => {

    return(
        <div className={lightBg ? 'home__home-section' : 'home__home-section darkBg'}>
            <div className="container">
                <div 
                className="row home__home-row"
                style={{display: 'flex', flexDirection: imgStart ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__home-text-wraper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headLine}</h1>
                            <p className={lightTextDesc ? 'home__home-subtitle' : 'home__home-subtitle dark'}>{description}</p>
                            <Link to="/sign-up">
                                <Button buttonSize='btn--wide' buttonColor='blue' >{buttonLabel}</Button>
                            </Link>

                        </div>
                    </div>
                    <div className="col">
                        <div className="home__home-img-wrapper">
                            <img className="home__home-img" src={img} alt={alt}/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection;