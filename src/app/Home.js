import React from 'react';
import './home.less';
import hero from '../images/hero-image.png';
import calculator from '../images/calculator.png';
import timer from '../images/timer.png';

const Home = () => {
  return (<div className="home">
      <img src={hero}></img>
      <div className="ref">
        <img src={calculator}></img>
        <p><a className="btn btn-secondary" href="../component/calculator">calculator</a></p>
      </div>

      <div className="ref">
        <img src={timer}></img>
        <p><a className="btn btn-secondary" href="../component/timer">timer</a></p>
      </div>   
  </div>);
};

export default Home;