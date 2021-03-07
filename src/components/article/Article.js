import React, { useState, useEffect } from 'react';
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';
import { FaRegCommentDots } from 'react-icons/fa';
import Comments from '../comments/Comments';

const Article = ({
  title,
  author,
  permalink,
  url_overridden_by_dest,
  ups,
  id,
  num_comments,
  thumbnail,
}) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <article className='article' key={id}>
        <div className='votes'>
          <TiArrowUpOutline className='up-arrow' />
          <h5 className='ups'>{ups}</h5>
          <TiArrowDownOutline className='down-arrow' />
        </div>
        <div className='content'>
          <h3 className='title'>{title}</h3>
          {thumbnail !== 'self' && (
            <img className='thumbnail' src={url_overridden_by_dest} alt='' />
          )}
          <div className='line'></div>
          <div className='author-and-comments'>
            <p className='author'>{author}</p>
            <div className='comments-btn'>
              <FaRegCommentDots
                className='comments-icon'
                onClick={toggleComments}
              />
              <p className='num-comments'>{num_comments}</p>
            </div>
          </div>
        </div>
      </article>
      <div className='comments-container'>
        {showComments && <Comments permalink={permalink} />}
      </div>
    </div>
  );
};

export default Article;
