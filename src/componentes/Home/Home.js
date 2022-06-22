import React from 'react';
import Infrastructure from '../Infrastructure/Infrastructure';
import LandingPage from '../LandingPage/LandingPage';
import Slider from '../Slider/Slider';
import Team from '../Team/Team';

const Home = () => {
     return (
       <div>
            <LandingPage></LandingPage>
          <Slider></Slider>
          <Infrastructure></Infrastructure>
          
        <Team></Team>

    
       </div>
     );
};

export default Home;