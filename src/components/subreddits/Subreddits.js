import React from 'react';
import './Subreddits.css';
import { SiReddit } from 'react-icons/si';

const Subreddits = ({ subreddits }) => {
  return (
    <aside className='sr-container'>
      {subreddits.map((subreddit) => {
        const { display_name, icon_img, id } = subreddit.data;
        return (
          <div key={id} className='item'>
            {icon_img !== '' ? (
              <img className='sr-icon' src={icon_img} alt='subreddit-icon' />
            ) : (
              <SiReddit className='default-icon' />
            )}
            <h4 className='sr-name'>{display_name}</h4>
          </div>
        );
      })}
    </aside>
  );
};

export default Subreddits;
