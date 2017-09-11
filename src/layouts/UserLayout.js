import React, { Component } from 'react'
import Search from '../Search'
import User from '../User'
import Followers from '../Followers'
import './UserLayout.css'

class UserLayout extends Component {
    constructor(props) {
        super(props);
        this._submitUsername = this._submitUsername.bind(this);
        this.state = { username: '' };
    }

    _submitUsername (e) {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        this.setState({
            username
        });
    }

    render() {
        const { username } = this.state
        return (
            <div className='UserLayout'>
                <aside style={username === '' ? {width: '100%', padding: 0} : null }>
                    <header>
                        <h1>GitHub Followers</h1>    
                    </header>
                    <Search submit={this._submitUsername} />
                    <User username={username} />
                </aside>
                <main>
                    <Followers username={username} />
                </main>
            </div>
        )
    }
}

export default UserLayout