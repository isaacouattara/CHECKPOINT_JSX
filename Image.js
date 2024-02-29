import React from 'react';
import product from './product';

const Image = ({ imageUrl }) => 
<img src={imageUrl} alt="Product" style={{ width: '200px', height: '200px' }} />;


export default Image;