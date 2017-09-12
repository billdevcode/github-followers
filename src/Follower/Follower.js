import React from 'react';
import PropTypes from 'prop-types'

const Follower = ({ avatarUrl, githubUrl }) => {
    return (
        <div className='Follower'>
            <a href={githubUrl} target='_blank'>
                <img className='Follower-image' src={avatarUrl} alt='GitHub Follower Avatar'/>
            </a>
        </div>
    );
};

Follower.propTypes = {
    avatarUrl: PropTypes.string,
    githubUrl: PropTypes.string,
}

export default Follower;