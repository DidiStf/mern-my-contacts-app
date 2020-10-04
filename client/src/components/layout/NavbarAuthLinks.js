import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAuthLinks = ({ onClickLogout, user }) => {
  return (
    <>
      <li className='mx-2'>Hello, {user && user.name}</li>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <a onClick={onClickLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'> Logout</span>
        </a>
      </li>
    </>
  );
};

export default NavbarAuthLinks;