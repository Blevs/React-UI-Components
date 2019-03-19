import React from 'react';
import './Card.css';

const CardContent = ({title, content, url}) => {
    return <div className="post-card-content">
             <h2>{title}</h2>
             <p>{content}</p>
             <a href={url}>{(new URL(url)).hostname.replace(/^www\./g, '')}</a>
           </div>;
};

export default CardContent;
