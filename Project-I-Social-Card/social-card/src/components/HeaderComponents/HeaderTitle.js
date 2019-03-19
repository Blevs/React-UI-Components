import React from 'react';
import './Header.css';

const HeaderTitle = ({name, username, date}) => {
    return <div className="post-header-title">
             <h2>{name}</h2>
             <h3>{username}</h3>
             <h3>{date}</h3>
           </div>;
};

export default HeaderTitle;
