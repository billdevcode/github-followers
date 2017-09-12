import React from 'react';
import PropTypes from 'prop-types'

const Search = ({ submit }) => {
    return (
        <div className='Search'>
            <form onSubmit={submit}>
                <input className='Search-searchbox' type='text' name='username' placeholder='Search user' required autoFocus />
                <input className='Search-submitButton' type='submit' value='Submit' />
            </form>
        </div>
    );
};

Search.propTypes = {
    submit: PropTypes.func
}

export default Search;