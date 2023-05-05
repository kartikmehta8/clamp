import React from 'react';
import './toggleButton.css';
import { useDispatch } from 'react-redux';

export default function ToggleButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  }

  return (
    <div className='center'>
      <label className='dark-mode-checkbox'>
        <input
          className='dark-mode-checkbox__input'
          type='checkbox'
          onClick={handleClick}
        />
        <span className='dark-mode-checkbox__hidden-text'>
          Enable Dark Mode
        </span>
        <span className='dark-mode-checkbox__circle'>
          <span className='dark-mode-checkbox__moon-details'>
            <span className='dark-mode-checkbox__moon-detail--1'></span>
            <span className='dark-mode-checkbox__moon-detail--2'></span>
            <span className='dark-mode-checkbox__moon-detail--3'></span>
            <span className='dark-mode-checkbox__moon-detail--4'></span>
            <span className='dark-mode-checkbox__moon-detail--5'></span>
          </span>
        </span>
        <span className='dark-mode-checkbox__clouds'>
          <span className='dark-mode-checkbox__cloud--1'></span>
          <span className='dark-mode-checkbox__cloud--2'></span>
        </span>
        <span className='dark-mode-checkbox__stars'>
          <span className='dark-mode-checkbox__star--1'></span>
          <span className='dark-mode-checkbox__star--2'></span>
          <span className='dark-mode-checkbox__star--3'></span>
          <span className='dark-mode-checkbox__star--4'></span>
          <span className='dark-mode-checkbox__star--5'></span>
          <span className='dark-mode-checkbox__star--6'></span>
          <span className='dark-mode-checkbox__star--7'></span>
          <span className='dark-mode-checkbox__star--8'></span>
          <span className='dark-mode-checkbox__star--9'></span>
        </span>
        <span className='dark-mode-checkbox__border'></span>
        <span className='dark-mode-checkbox__background'></span>
      </label>
    </div>
  );
}
