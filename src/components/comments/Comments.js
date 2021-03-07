import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = ({ permalink }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await fetch(
      'https://www.reddit.com' + permalink + '.json'
    );
    const jsonResponse = await response.json();
    setComments(jsonResponse[1].data.children);
    setIsLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  console.log(comments);

  if (isLoading) {
    return <div className='loading'>It's loading</div>;
  } else {
    return (
      <div>
        {comments.map((comment) => {
          const { id, author, body, ups } = comment.data;
          return (
            <div className='single-comment' key={id}>
              <p className='comment-body'>{body}</p>
              <p className='comment-author'>{author}</p>
              <p className='comment-ups'>{ups}</p>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Comments;
