import React from 'react';
import './Card.css';

const CardBanner = ({src}) => {
    return <div className="post-card-img-container">
             <img src={src} alt=""/>
           </div>;
};

export default CardBanner;
