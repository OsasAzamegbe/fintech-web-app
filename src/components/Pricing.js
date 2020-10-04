import React from 'react';
import {Link} from 'react-router-dom';
import {FaFire} from 'react-icons/fa';
import Button from './Button';


const Pricing = () => {
    return (
        <div className="pricing__section">
            <div className="pricing__wrapper">
                <h1 className="pricing__heading">
                    Pricing
                </h1>
                <div className="pricing__container">
                    <Link to="sign-up" className="pricing__container-card">
                        <div className="pricing__container-cardInfo">
                            <div className="icon">
                                <FaFire/>
                            </div>
                            <h3>Starter</h3>
                            <h4>$4.99</h4>
                            <p>per month</p>
                            <ul className="pricing__container-features">
                                <li>100 Transactions</li>
                                <li>2% Cash Back</li>
                                <li> $10,000 Limit</li>
                            </ul>
                            <Button buttonSize="btn--wide" buttonColor="primary">
                                Choose Plan
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing;