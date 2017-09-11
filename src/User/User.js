import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            isLoading: false,
            error: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.username !== this.props.username) {
            this._getUserData(nextProps.username);
        }
    }
    
    _getUserData (username) {
        if (!username) { return null; }
        this._isLoading();

        const url = `https://api.github.com/users/${username}`;
            return fetch(url)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
            }
                return response.json();
            })
            .then(user => {
                this._setUser(user);
            })
            .catch(error => {
                console.warn(error);
                this.setState({ error });           
            });
    }

    _isLoading () {
        this.setState({
            user: '',            
            isLoading: true,
            error: ''
        });
    }

    _setUser (user) {
        this.setState({ 
            user,
            isLoading: false
        });
    }

    render () {  
        const { user, isLoading, error } = this.state;
        if (error) { return (<p>Error - cannot find user</p>); }
        if (isLoading) { return (<p>Loading user information</p>); }
        if (!user) { return null; }      
        return (
            <div className='User'>
                <a href={user.html_url}>
                    <img className='User-image' src={user.avatar_url} alt='user avatar'/>
                </a>
                <h3>{user.name}</h3>
                <a href={user.html_url}>
                    <p>{user.login}</p>
                </a>
                <p>Followers: {user.followers}</p>
            </div>
        );
    }
}

export default User;