import React from 'react';
import './SearchBar.css'

export class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input placeholder='Enter A Song, Album or Artist'  m/>
                <button className='SearchButton'>SEARCH</button>
            </div>
        );
    }
}