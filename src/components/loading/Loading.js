import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-card">
                <div className="title-block animate"></div>
                <div className="picture-block animate"></div>
            </div>
            <div className="loading-card">
                <div className="title-block animate"></div>
                <div className="picture-block animate"></div>
            </div>
            <div className="loading-card">
                <div className="title-block animate"></div>
                <div className="picture-block animate"></div>
            </div>
            
        </div>
    )
}

export default Loading
