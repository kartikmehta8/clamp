import React from 'react';
import './header.css';
import ToggleButton from '../ToggleButton/Button';

export default function Header({ isDarkModeEnabled }) {
  return (
    <div
      className={isDarkModeEnabled ? 'border-dark flex' : 'border-light flex'}
    >
      <span className='theme-font'>clamp</span>
      <div>
        <ToggleButton />
      </div>
    </div>
  );
}
