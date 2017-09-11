import React, { Component } from 'react';
import Follower from '../Follower'

class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: null,
            isLoading: false,
            error: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.username !== this.props.username) {
            this._getFollowersData(nextProps.username);
        }
    }

    _getFollowersData (username) {
        if (!username) { return null; }
        this._isLoading();

        const url = `https://api.github.com/users/${username}/followers`;
        return fetch(url)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
        }
            return response.json();
        })
        .then(followers => {
            this._setFollowers (followers);
        })
        .catch(error => {
            console.warn(error);
        });
    }

    _isLoading () {
        this.setState({ 
            followers: null,
            isLoading: true,
            error: ''
        });
    }

    _setFollowers (followers) {
        this.setState({ 
            followers,
            isLoading: false
        });
    }

    render () {
        const { followers, isLoading, error } = this.state;
        if (error || followers === null) { return null; }
        if (isLoading) { return (<p>Loading user followers</p>); }        
        if (followers.length === 0) { return (<p>This user has no followers</p>) }

        return (
            <div className='Followers'>
                <header>
                    <h1>Followers</h1>
                </header>
                <div className='Followers-wrapper'>
                    {followers && followers.map((follower, idx) => {
                        const { avatar_url, html_url } = follower;
                        return (
                            <Follower key={idx} avatarUrl={avatar_url} githubUrl={html_url} />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Followers;