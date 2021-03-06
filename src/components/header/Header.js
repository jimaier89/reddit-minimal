import React from 'react';
import './Header.css';
import { SiReddit } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs';

const Header = ({ searchVal, setSearchVal, handleSearch }) => {
  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <header className='header'>
      <SiReddit className='header-icon' />
      <h1 className='site-title'>
        <span className='reddit'>reddit</span>minimal
      </h1>
      <form className='search-container ' onSubmit={handleSearch}>
        <BsSearch className='search-icon' />
        <input
          className='search-field'
          type='text'
          placeholder='search...'
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
