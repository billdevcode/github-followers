import React, { Component } from 'react'
import Search from '../Search'
import Profile from '../Profile'
import Followers from '../Followers'
import './User.css'

class User extends Component {
    constructor(props) {
        super(props);
        this._submitUsername = this._submitUsername.bind(this);
        this.state = { 
            user: null,
            followers: null,
            followersCount: null,
            isLoading: false,
            error: ''
        };
    }

    _submitUsername (e) {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        this._getUserData (username);
        this._getFollowersData(username);
    }

    _isLoadingUser () {
        this.setState({
            user: '',
            isLoading: true,
            error: ''
        });
    }

    _getUserData (username) {
        if (username === null) { return null; }
        this._isLoadingUser();

        const url = `https://api.github.com/users/${username}`;
            return fetch(url)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
            }
                return response.json();
            })
            .then(user => {
                this._setUser({
                    login: user.login,
                    avatarUrl: user.avatar_url,
                    htmlUrl: user.html_url,
                    name: user.name,
                    followersCount: user.followers
                });
            })
            .catch(error => {
                console.warn(error);
                this.setState({ error });           
            });
    }

    _setUser (user) {
        this.setState({ 
            user,
            followersCount: user.followersCount,
            isLoading: false
        });
    }

    _isLoadingFollowers () {
        this.setState({ 
            followers: null,
            isLoading: true,
            error: ''
        });
    }

    _getFollowersData (username) {
        if (!username) { return null; }
        this._isLoadingFollowers();

        const url = `https://api.github.com/users/${username}/followers?per_page=100&page=1`;
        return fetch(url)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
        }
            return response.json();
        })
        .then(followers => {
            const followersList = followers.map(follower => {
                return {
                    login: follower.login,
                    avatarUrl: follower.avatar_url,
                    htmlUrl: follower.html_url
                }
            })
            this._setFollowers (followersList);
        })
        .catch(error => {
            console.warn(error);
        });
    }

    _setFollowers (followers) {
        this.setState({ 
            followers,
            isLoading: false
        });
    }

    render() {
        const { user, followers, isLoading, error, followersCount } = this.state

        if (isLoading && !error) { return <p className='User-loading'>Loading data</p> }

        return (
            <div className='User'>
                <aside style={error || user === null ? {width: '100%', padding: 0} : null }>
                    <header>
                        <h1>GitHub Followers</h1>    
                    </header>
                    <Search submit={this._submitUsername} />
                    <Profile user={user} />
                    {error && <p style={{ color: 'red' }}>Error loading user or user does not exist</p>}
                </aside>
                <main>
                    <Followers followers={followers} count={followersCount} />
                </main>
            </div>
        )
    }
}

export default User