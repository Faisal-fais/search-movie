import React from 'react'

type SearchProps = {
    searchTerm : string;
    setSearchTerm : void;
}

const Search = (props :SearchProps) => {
    const {searchTerm, setSearchTerm} = props;
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />
            <input type="text" placeholder='Search through thousand of movies' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        </div>
    </div>
  )
}

export default Search;
