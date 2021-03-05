import React, {useState, useEffect} from 'react';
import './Comments.css';

const Comments = ({url}) => {
    const {comments, setComments} = useState([]);

    const endpoint = url + '.json';

   /*  const getComments = async () => {
        const response = await fetch(endpoint);
        const jsonResponse = await response.json();
        setComments(jsonResponse)
    }

    useEffect(() => {
        getComments()
    }, []) */

    console.log(endpoint)
    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}

export default Comments

