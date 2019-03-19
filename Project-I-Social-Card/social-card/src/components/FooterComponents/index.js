import React from 'react';
import './Footer.css';
import { ReactComponent as Comment } from './comment.svg';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as Repost } from './repost.svg';
import { ReactComponent as Email } from './email.svg';

const Footer = ({reposted, reposts, handleReposting, liked, likes, handleLiking}) => {
    return <div className="post-footer">
             <Comment />
             <div>
               <Repost className={reposted ? "reposted" : ""}
                       onClick={handleReposting}/>
               <span>
                 {reposts}
               </span>
             </div>
             <div>
               <Heart className={liked ? "liked" : ""}
                       onClick={handleLiking}/>
               <span>
                 {likes}
               </span>
             </div>
             <Email />
           </div>;
};

export default Footer;
