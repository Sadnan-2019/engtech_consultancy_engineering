import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Slider from '../Slider/Slider';
import Team from '../Team/Team';

const Home = () => {
     return (
       <div>
          <Slider></Slider>
          
        <Team></Team>

        <LandingPage></LandingPage>
       </div>
     );
};

export default Home;