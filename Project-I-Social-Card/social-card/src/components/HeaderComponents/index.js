import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

const HeaderContainer = ({img, name, username, date, content}) => {
    return <div className="post-header">
             <ImageThumbnail src={img} />
             <div className="post-header-copy">
               <HeaderTitle name={name} username={username} date={date} />
               <HeaderContent content={content} />
             </div>
           </div>;
};

export default HeaderContainer;
