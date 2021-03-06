import React, { useState } from 'react';
import Comments from '../comments/Comments';
import { TiArrowUpOutline, TiArrowDownOutline } from 'react-icons/ti';
import { FaRegCommentDots } from 'react-icons/fa';
import './Articles.css';

const Articles = ({ articles }) => {
  const [showComments, setShowComments] = useState(false);
  const [permalink, setPermalink] = useState('');

  const toggleComments = () => {
    setShowComments(!showComments);
    setPermalink(permalink);
  };

  /* console.log(showComments, permalink); */

  return (
    <div className='article-container'>
      {articles.map((article) => {
        const {
          title,
          author,
          permalink,
          url_overridden_by_dest,
          thumbnail,
          ups,
          id,
          num_comments,
        } = article.data;
        return (
          <article className='article' key={id}>
            <div className='votes'>
              <TiArrowUpOutline className='up-arrow' />
              <h5 className='ups'>{ups}</h5>
              <TiArrowDownOutline className='down-arrow' />
            </div>
            <div className='content'>
              <h3 className='title'>{title}</h3>
              {thumbnail !== 'self' && (
                <img
                  className='thumbnail'
                  src={url_overridden_by_dest}
                  alt=''
                />
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
            {showComments && <h2>{permalink}</h2>}
          </article>
        );
      })}
    </div>
  );
};

export default Articles;
