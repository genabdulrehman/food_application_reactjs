import React from 'react';
import {FooterOverlay, Newsletter} from '../../components';
import {images} from '../../constants';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
 <FooterOverlay />
 <Newsletter  />
 <div className='app__footer-links'>
   <div className="app__footer-links_contacts">
     <h1 className="app__footer-headtext">
       Contacts
     </h1>

     <p className="p__opensans">3 Block Road, Ali Town Lahore, Pakistan.</p>
     <p className="p__opensans">+92 345 43 345</p>
     <p className="p__opensans">+92 345 43 345</p>
   </div>
   <div className="app__footer-links_logo">
     <img src={images.gericht} alt="footer logo" />
     <p className="p__opensans">" The best way to find yourself is to loose yourself in others service."</p>
     <img src={images.spoon} alt="" />
     <div className="app__footer-links_icons">
       <FiFacebook />
       <FiTwitter />
       <FiInstagram />
     </div>

   </div>
   <div className="app__footer-links_work">
   <h1 className="app__footer-headtext">
       Working Hours
     </h1>

     <p className="p__opensans">Monday - Friday :</p>
     <p className="p__opensans">8:00 am - 5 pm</p>
     <p className="p__opensans">Saturday - Sunday :</p>
     <p className="p__opensans">7:00 am - 2 pm</p>
   </div>
 </div>

 <div className="footer__copyright">
   <p className="p__opensans">
     2022 Gericht. All Rights are reversered.
   </p>
 </div>
  </div>
);

export default Footer;
