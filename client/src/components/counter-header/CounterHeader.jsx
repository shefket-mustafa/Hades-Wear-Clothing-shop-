import './counter-header.css';

export default function CounterHeader() {
  return <div className="header-counter-container">

    <div className="header-discount-text">
        <p style={{fontWeight: '550'}}>PAY 1 GET 2 ON EYEWEAR</p>
        <p>CODE: <strong>HADES</strong></p>
    </div>

    <div className="header-counter">
        <p>ENDS IN:</p>
        <p>Counter</p>
    </div>

  </div>;
}