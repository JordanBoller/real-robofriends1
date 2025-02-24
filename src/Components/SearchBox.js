import React from "react";


const SearchBox = ({ searchChange}) => {
    return (
        <div className='pa2 '>
        <input 
        className='tc ma5 pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='Search Robots!'
        onChange={searchChange}
        />
        </div>
        
    );

}
export default SearchBox;