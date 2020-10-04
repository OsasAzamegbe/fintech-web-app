import React from 'react';
import './Footer.css';
import {
  FaMedium,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import Button from '../../Button';
import { Link } from 'react-router-dom';


const Footer = () => {

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to the Shinzu Community Digest to receive the latest financial news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>          
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
          
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='//github.com/OsasAzamegbe/'>Github</Link>
            <Link to='//linkedin.com/in/osamudiamen-azamegbe/'>LinkedIn</Link>
            <Link to='//medium.com/@osas.azamegbe'>Medium</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              SHINZU
            </Link>
          </div>
          <small className='website-rights'>SHINZU © 2020</small>
          <div className='social-icons'>
          <Link
              className='social-icon-link'
              to={
                '//github.com/OsasAzamegbe/'
              }
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to='//linkedin.com/in/osamudiamen-azamegbe/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <Link
              className='social-icon-link'
              to='//medium.com/@osas.azamegbe'
              target='_blank'
              aria-label='Medium'
            >
              <FaMedium />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;