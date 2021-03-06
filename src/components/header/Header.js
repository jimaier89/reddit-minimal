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
      <SiReddit />
      <h1>reddit minimal</h1>
      <form onSubmit={handleSearch}>
        <input type='text' placeholder='search...' onChange={handleChange} />
      </form>
    </header>
  );
};

export default Header;
