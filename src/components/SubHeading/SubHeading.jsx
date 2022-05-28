import React from 'react';
import {images} from '../../constants';

const SubHeading = ({title}) => (
    <div style={{marginBottom:'1rem'}}>
        <p className="p__cormorant">{title}</p>
        <img className="spoon_img" src={images.spoon} alt="Spoon"></img>
  </div>
);

export default SubHeading;
