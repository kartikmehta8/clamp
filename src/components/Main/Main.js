import React from 'react';
import './styles/main.css';
import { data } from '../../constants/data';
import Card from './helpers/Card';

export default function Main({ isDarkModeEnabled }) {
  return (
    <div className='padding-yaxis'>
      <div className='flex-main'>
        <div className={isDarkModeEnabled ? 'explore-light' : 'explore-dark'}>
          Explore
        </div>
        <div>
          <div className={isDarkModeEnabled ? 'button-dark' : 'button-light'}>
            Connect Wallet
          </div>
        </div>
      </div>
      <div className='padding-20per'>
        <div
          className={
            isDarkModeEnabled
              ? 'border-dark-main flex-main-inner center'
              : 'border-light-main flex-main-inner center'
          }
        >
          <div className='font'>
            <span>Buy any crypto index anytime, anywhere.</span>
          </div>
          <div className='grid'>
            {data.map((card, index) => (
              <Card card={card} isDarkModeEnabled={isDarkModeEnabled} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
