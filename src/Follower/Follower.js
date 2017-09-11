import React from 'react'

const Follower = ({ avatarUrl, githubUrl }) => {
    return (
        <div className='Follower'>
            <a href={githubUrl}>
                <img className='Follower-image' src={avatarUrl} alt='follower avatar'/>
            </a>
        </div>
    )
}

export default Follower