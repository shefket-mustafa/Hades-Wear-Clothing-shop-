import { useEffect, useState } from 'react';
import './counter-header.css';

export default function CounterHeader() {

  const [secondsLeft, setSecondsLeft] = useState(10 * 60); 

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
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