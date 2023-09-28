import React from 'react'
import "./Searchbar.css"
import { FaSearch } from "react-icons/fa"

function SearchBar({handleChange}) {
    return (
        <div className='search'>
            <div className='searchInputs'>
                <div className='icon-container'>
                    <div className='searchIcon'>
                        <span className='icon'><FaSearch /></span>
                    </div>
                </div>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for a Country"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default SearchBar

