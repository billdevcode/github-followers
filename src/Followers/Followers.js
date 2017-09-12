import React from 'react';
import Follower from '../Follower';

const Followers = ({ listOfFollowers }) => {
    if (!listOfFollowers) { return null; }
    
    return (
        <div className='Followers'>
            <div className='Followers-wrapper'>
                {listOfFollowers && listOfFollowers.map((follower, idx) => {
                    const { avatarUrl, htmlUrl } = follower;
                    return (
                        <Follower key={idx} avatarUrl={avatarUrl} githubUrl={htmlUrl} />
                    );
                })}
            </div>
        </div>
    );
};

export default Followers;