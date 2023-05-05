import React from 'react';
import '../styles/card.css';
import ArrowUp from './ArrowUp';

export default function Card({ card, isDarkModeEnabled }) {
  return (
    <div>
      <div className={isDarkModeEnabled ? 'card-dark' : 'card-light'}>
        <div className='card-name'>{card.name}</div>
        <div
          className={
            isDarkModeEnabled
              ? 'flex-card flex-card-dark'
              : 'flex-card flex-card-light'
          }
        >
          <div>Underlying Tokens</div>
          <div>
            Price Change <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(in 24hrs)
          </div>
        </div>
        <div className='flex-card'>
          <div>
            {card.images.map((image, index) => (
              <img className='card-image' src={image} key={index} alt='img' />
            ))}
          </div>
          <div className='card-percentage flex-per'>
            <span style={{ color: 'green' }}>
              <ArrowUp />
            </span>
            {card.price}%
          </div>
        </div>
      </div>
      <div
        className={
          isDarkModeEnabled ? 'buy-flex buy-dark' : 'buy-flex buy-light'
        }
      >
        Buy
      </div>
    </div>
  );
}
