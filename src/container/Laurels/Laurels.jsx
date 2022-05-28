import React from 'react';


import {SubHeading} from '../../components';
import {images, data} from '../../constants';


import './Laurels.css';

const AwardCard=({award:{title, imgUrl, subtitle}})=>(
  <div className='app__laurels_award-cards'>
    <img src={imgUrl} alt="" />
    <div className='app__laurels_award-cards_content'>
      <p className='p__cormorant' style={{color:"#DCCA87"}}> {title} </p>
      <p className='p__cormorant' > {subtitle} </p>
    </div>

  </div>

)

const Laurels = () => (
  <div  className="app__bg app__wrapper section__padding" id='awards'>
  <div className='app__wrapper_info'>
    <SubHeading title="Awards & Recognition" />
    <h1 className='headtext__cornomant'>
      Our Laurels
    </h1>

    <div className="app__laurels_awards">
      {data.awards.map((award)=> <AwardCard key={award.title} award={award} />)}
    </div>

  </div>

  <div className="app__wrapper_img">
    <img src={images.laurels} alt="laurels img" />

  </div>
  </div>
);

export default Laurels;
