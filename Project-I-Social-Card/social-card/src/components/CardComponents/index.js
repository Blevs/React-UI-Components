import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = ({url, img, title, content}) => {
    return <div className="post-card">
             <a href={url}>
               <CardBanner src={img} />
               <CardContent title={title} content={content} url={url} />
             </a>
           </div>;
};

export default CardContainer;
