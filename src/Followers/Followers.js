import React from 'react';
import Follower from '../Follower'

const Followers = ({ followers, count }) => {
    if (!followers) { return null; }
    
    return (
        <div className='Followers'>
            <div className='Followers-wrapper'>
                {followers && followers.map((follower, idx) => {
                    const { avatarUrl, htmlUrl } = follower;
                    return (
                        <Follower key={idx} avatarUrl={avatarUrl} githubUrl={htmlUrl} />
                    );
                })}
            </div>
        </div>
    );
}

export default Followers;