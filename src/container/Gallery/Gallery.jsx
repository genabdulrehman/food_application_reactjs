import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import {BsInstagram,BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll=(direction)=>{
    const {current} = scrollRef;

    if(direction==='left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft +=300;
    }

  }
  const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04,images.gallery01,];

  return (
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
    <h1 className="headtext__cormorant">
      Photo and Gallery
    </h1>

    <p className="p__openstans" style={{color:"#AAA", marginTop:"2rem"}}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dolore veniam exercitationem dolor rem inventore cupiditate rerum nisi cumque atque?
    </p>
    <button type='button' className="custom__button" >
      View more
    </button>
    </div>

    <div className="app__gallery-images">
      <div className='app__gallery-images_container' ref={scrollRef}>

      {galleryImages.map((image, index)=>(
        <div className='app__gallery-images_card flex__center' id={`gallery_images-${index + 1}`} >

          <img src={image} alt="gallery" />
          <BsInstagram className='gallery__image-icon' />
        </div>
      ) )}

      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
      </div>
    </div>

  </div>
  );
}

export default Gallery;
