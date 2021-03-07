import React, { useState } from 'react';
import Article from '../article/Article';
import './Articles.css';

const Articles = ({ articles }) => {
  const [permalink, setPermalink] = useState('');

  /* console.log(showComments, permalink); */

  return (
    <div className='article-container'>
      {articles.map((article) => {
        const {
          title,
          author,
          permalink,
          url_overridden_by_dest,
          ups,
          id,
          num_comments,
          thumbnail,
        } = article.data;
        return (
          <Article
            key={id}
            title={title}
            author={author}
            permalink={permalink}
            url_overridden_by_dest={url_overridden_by_dest}
            ups={ups}
            id={id}
            num_comments={num_comments}
            thumbnail={thumbnail}
          />
        );
      })}
    </div>
  );
};

export default Articles;
