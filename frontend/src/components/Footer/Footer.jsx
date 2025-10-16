import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis possimus tempore ea nostrum aliquam cupiditate, voluptatum mollitia doloremque voluptates debitis, quidem quisquam, explicabo animi ipsa optio temporibus! Molestias, omnis.</p>
          <div className="footer-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+2-256-635-124</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
