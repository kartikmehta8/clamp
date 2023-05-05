import React from 'react';
import './notification.css';

export default function Notification() {
  return (
    <div>
      <div className='notification-top-bar'>
        <p>
          Clamp is deployed on the Polygon mainnet but still undergoing testing.
          There is a risk of losing your funds and cryptocurrency. To go back to
          Clamp's main page{' '}
          <a
            href='https://joinclamp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
