import React from 'react';
import './Plans.css';
import {Link} from 'react-router-dom';
import {FaFire} from 'react-icons/fa';
import {BsXDiamondFill} from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import Button from './Button';


const Plans = () => {
    return (
        <IconContext.Provider value={{color: 'white', size: 64}}>
            <div className="plans__section">
                <div className="plans__wrapper">
                    <h1 className="plans__heading">
                        Plans
                    </h1>
                    <div className="plans__container">
                        <Link to="sign-up" className="plans__container-card">
                            <div className="plans__container-cardInfo">
                                <div className="icon">
                                    <FaFire/>
                                </div>
                                <h3>Starter</h3>
                                <h4>$6.99</h4>
                                <p>per month</p>
                                <ul className="plans__container-features">
                                    <li> $10,000 Spending Limit</li>
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to="sign-up" className="plans__container-card">
                            <div className="plans__container-cardInfo">
                                <div className="icon">
                                    <BsXDiamondFill/>
                                </div>
                                <h3>Gold</h3>
                                <h4>$9.99</h4>
                                <p>per month</p>
                                <ul className="plans__container-features">
                                    <li> $100,000 Spending Limit</li>
                                    <li>1000 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                </ul>
                                <Button buttonSize="btn--wide"
                                buttonColor="blue">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                        <Link to="sign-up" className="plans__container-card">
                            <div className="plans__container-cardInfo">
                                <div className="icon">
                                    <GiCrystalize/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>$14.99</h4>
                                <p>per month</p>
                                <ul className="plans__container-features">
                                    <li> Unilimited Spending Limit</li>
                                    <li>Unlimited Transactions</li>
                                    <li>6% Cash Back</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">
                                    Choose Plan
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </IconContext.Provider>   
    )
}

export default Plans;