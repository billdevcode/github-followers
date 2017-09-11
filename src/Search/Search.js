import React from 'react';

const Search = ({ submit }) => {
    return (
        <div className='Search'>
            <form onSubmit={submit}>
                <input className='Search-searchbox' type='text' name='username' placeholder='Search user' required/>
                <input className='Search-submitButton' type='submit' />
            </form>
        </div>
    );
};

export default Search;