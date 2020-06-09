import React from 'react';
import logo from '../logo.svg';

export default function Logo({ moreInfo }) {
  return (
    <div onClick={ moreInfo }>
      <img
        src={logo} 
        className="App-logo" 
        alt="logo" 
        />
    </div>
  );
}
