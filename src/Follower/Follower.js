import React from 'react';

const Follower = ({ avatarUrl, githubUrl }) => {
    return (
        <div className='Follower'>
            <a href={githubUrl}>
                <img className='Follower-image' src={avatarUrl} alt='GitHub Follower Avatar'/>
            </a>
        </div>
    );
};

export default Follower;