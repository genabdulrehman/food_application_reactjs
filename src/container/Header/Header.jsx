import React from 'react';
import {images} from '../../constants';
import {SubHeading} from "../../components";
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    Header
      <div className="app__wrapper_info" >
          <SubHeading title="Chase The New Flavour" />
          <h1 className="app__header-h1" > The Key to Find Dining </h1>
          <p className="p__opensans" style={{margin:'2rem 0'}}> The is our website to provide the best foods in the world for our true customers. We'd like to guarentee the quality of foods which will be provided by us with full healthy nutrition facts. Thanks</p>

          <button type="button" className="custom__button"> Explore Menu </button>_
    </div>
    <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome Img" />

        </div> 

    </div>
);

export default Header;
