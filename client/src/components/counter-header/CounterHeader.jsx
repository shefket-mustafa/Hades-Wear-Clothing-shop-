import { useEffect, useState } from 'react';
import './counter-header.css';

export default function CounterHeader() {

  
  const STORAGE_KEY = 'offerExpiration';
  const [secondsLeft, setSecondsLeft] = useState(0);
  useEffect(() => {
    
    let expiration = localStorage.getItem(STORAGE_KEY);
    if (!expiration) {
      // Set expiration time to 10 minutes from now
      const newExpiration = Date.now() + 10 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, newExpiration);
      expiration = newExpiration;
    }

    const expirationTime = parseInt(expiration, 10);

    const updateRemainingTime = () => {
      const now = Date.now();
      const remaining = Math.floor((expirationTime - now) / 1000);
      if (remaining <= 0) {
        setSecondsLeft(0);
        clearInterval(intervalId);
        localStorage.removeItem(STORAGE_KEY);
      } else {
        setSecondsLeft(remaining);
      }
    };

    updateRemainingTime();
    const intervalId = setInterval(updateRemainingTime, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };
  return <div className="header-counter-container">

    <div className="header-discount-text">
        <p style={{fontWeight: '550'}}>PAY 1 GET 2 ON EYEWEAR</p>
        <p>CODE: <strong>HADES</strong></p>
    </div>

    <div className="header-counter">
        <p className='ends-timer'>ENDS IN:</p>
        <p className='timer'>{secondsLeft === 0 ? "Offer expired" : formatTime(secondsLeft)}</p>
    </div>

  </div>;
}