import React, {useState} from 'react';
/* import Comments from '../comments/Comments' */
import {TiArrowUpOutline, TiArrowDownOutline} from 'react-icons/ti';
import {FaRegCommentDots} from 'react-icons/fa';
import './Articles.css';


const Articles = ({articles}) => {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
        console.log(showComments);
    }

    return (
        <div className="article-container">
            {articles.map((article) => {
                const {
                    title, 
                    author, 
                    url,
                    thumbnail, 
                    ups, 
                    id, 
                    num_comments, 
                    /* subreddit_name_prefixed */
                } = article.data;
                return (
                    <article className="article" key={id}>
                        <div className="votes">
                            <TiArrowUpOutline className="up-arrow" />
                            <h5 className="ups">{ups}</h5>
                            <TiArrowDownOutline className="down-arrow"/>
                        </div>
                        <div className="content">
                            <h3 className="title">{title}</h3>
                            {thumbnail !== 'self' && <img className="thumbnail" src={url} alt=""/>}
                            <div className="line"></div>
                            <div className="author-and-comments">
                                <p className="author">{author}</p>
                                <div className="comments-btn">
                                    <FaRegCommentDots className="comments-icon" onClick={toggleComments} />
                                    <p className="num-comments">{num_comments}</p>
                                </div>
                                
                            </div>
                        </div>
                        {/* {showComments && <Comments title={title} 
                            subreddit={subreddit_name_prefixed}
                            id={id}/>} */}
                    </article>
                )
            })}
        </div>
    )
}

export default Articles
