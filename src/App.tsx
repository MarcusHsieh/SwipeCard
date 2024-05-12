import { useState } from 'react';
import phone from './assets/start iPhone.png';
import logo from './assets/icon thing.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    

    <div className="bg">
      <div className="navbar">
        <div className="nav-items">
          <div className="nav-item">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
            <div className="heading">SwipeCard.</div>
          </div>
          <div className="subheading">Swiping into work has never been easier</div>
          
          <div className="buttons-container">
            <div className="button push-button">Watch Demo</div>
            <div className="button push-button">Swipe In</div>
          </div>
        </div>

        <div className="phone-container">
          <img className="phone-image" src={phone} alt="phone" />
        </div>
      </div>
    </div>
    
  );
}

export default App;
