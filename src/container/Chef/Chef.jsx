import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef Picture" />

    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'> What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="" />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectet
          </p>
          <p className='p__opensans'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum corrupti tempora ratione aperiam debitis facilis, ipsum fugit temporibus laudantium inventore rerum dolore assumenda libero quo dolores at veniam asperiores recusandae?
          </p>
         
        </div>
        <div className='app__chef-sign'>
            <p style={{color:"white"}}>Kevin Luo</p>
            <p className="p__opensans">
              Chef & Founder
            </p>

            <img src={images.sign} alt="" />

          </div>
      </div>
    </div>
  </div>
);

export default Chef;

// bug fixtures....