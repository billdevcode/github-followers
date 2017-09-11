import React from 'react';

const Profile = ({ user }) => {
    if (!user) { return null }
    const { htmlUrl, avatarUrl, name, login, followersCount } = user
    
    return (
        <div className='Profile'>
            <a href={htmlUrl}>
                <img className='Profile-image' src={avatarUrl} alt='user avatar'/>
            </a>
            <h3>{name}</h3>
            <a href={htmlUrl}>
                <p>{login}</p>
            </a>
            <p>Followers: {followersCount.toLocaleString()}</p>
        </div>
    );
}

export default Profile;