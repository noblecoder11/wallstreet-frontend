import React from 'react'
import Icon from './img/icon.png'
import './Search.css'
const Search = props => {
  const keywordChangeHandler = event => {
    props.keywordHandler(event.target.value.toUpperCase());
  }
  return (
    <>
      <div className='Search_div'>
        <img src={Icon} alt='Not found!' className='Icon'></img>
        <input
          placeholder='Search....'
          className='SearchBar'
          onChange={keywordChangeHandler}
        ></input>
      </div>
    </>
  )
}

export default Search
