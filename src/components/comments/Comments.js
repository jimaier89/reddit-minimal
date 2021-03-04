import React, {useState, useEffect} from 'react'

const Comments = ({subreddit, id, title}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);

    const formattedTitle = title.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}[]=\-_`~()]/g,'').replace(/\s/g, '_');

    const URL = 'https://www.reddit.com/' + subreddit + '/comments/' + id + '/' + formattedTitle + '.json';

    const getComments = async (subreddit, id) => {
        const response = await fetch(URL);
        const jsonResponse = await response.json();
        console.log(jsonResponse)
    }

    useEffect(() => {
        getComments(subreddit, id)
    }, [])

    return (
        <div className="comments-container">
            <h1>{subreddit}</h1>
            <h1>{id}</h1>
            <h1>{formattedTitle}</h1>
            
        </div>
    )
}

export default Comments;


/* {comments.map((comment) => {
    const {author, body} = comment;
    return (
        <div className="comment-card">
            <h3 className="author">{author}</h3>
            <p className="body">{body}</p>
        </div>
    )
})} */

