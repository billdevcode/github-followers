import React, { Component } from 'react';
import Search from '../Search';
import Profile from '../Profile';
import Followers from '../Followers';
import { fetchGitHubData } from '../helpers'
import './User.css';

class User extends Component {
    constructor(props) {
        super(props);
        this._submitUsername = this._submitUsername.bind(this);
        this._getMoreFollowers = this._getMoreFollowers.bind(this);
        this.state = { 
            user: undefined,
            listOfFollowers: [],
            followersCount: 0,
            isLoading: false,
            page: 1,
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
            user: null,
            isLoading: true,
            error: ''
        });
    }

    _getUserData (username) {
        if (!username) { return null; }
        this._isLoadingUser();

        fetchGitHubData(username).then(user => {
            this._setUser(user);
        }).catch(error => {
            console.warn(error);
            this.setState({ error });           
        });
    }

    _setUser (user) {
        const currentUser = {
            login: user.login,
            avatarUrl: user.avatar_url,
            htmlUrl: user.html_url,
            name: user.name,
            followersCount: user.followers
        };
        this.setState({ 
            user: currentUser,
            followersCount: currentUser.followersCount,
            page: 1
        });
    }

    _isLoadingFollowers () {
        this.setState({ 
            listOfFollowers: [],
            error: ''
        });
    }

    _mapFollowers (follower) {
        return {
            login: follower.login,
            avatarUrl: follower.avatar_url,
            htmlUrl: follower.html_url
        };
    }

    _getFollowersData (username) {
        if (!username) { return null; }
        this._isLoadingFollowers();

        fetchGitHubData(username, 1).then(followers => {
            const followersList = followers.map(this._mapFollowers);
            this._setFollowers (followersList);
        }).catch(error => {
            console.warn(error);
        });
    }

    _setFollowers (followers) {
        this.setState({ 
            listOfFollowers: [...this.state.listOfFollowers, ...followers],
            page: this.state.page + 1,            
            isLoading: false
        });
    }

    _getMoreFollowers () {
        const { login: username } = this.state.user
        const { page } = this.state;
        if (!username) { return null; }

        fetchGitHubData(username, page).then(followers => {
            const followersList = followers.map(this._mapFollowers);
            this._setFollowers (followersList);            
        }).catch(error => {
            console.warn(error);
        });
    }

    render() {
        const { user, listOfFollowers, isLoading, error, followersCount } = this.state;
        const loadMore = listOfFollowers.length > 0 && user && followersCount && followersCount > listOfFollowers.length;
        if (isLoading && !error) { return (<p className='User-loading'>Loading data</p>); }

        return (
            <div className='User'>
                <aside style={error || user === undefined ? {width: '100%', padding: 0} : null }>
                    <header>
                        <h1>GitHub Followers</h1>    
                    </header>
                    <Search submit={this._submitUsername} />
                    <Profile user={user} />
                    {error && <p style={{ color: 'red' }}>Error: user does not exist or exceeded API limit</p>}
                </aside>
                <main>
                    <Followers listOfFollowers={listOfFollowers} />
                    {loadMore && <button className='Followers-loadMore' 
                        onClick={this._getMoreFollowers}>Load more
                    </button>}
                </main>
            </div>
        )
    }
}

export default User;