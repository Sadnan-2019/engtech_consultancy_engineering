import React from 'react';

const Slider = () => {
     return (
          <div className="hero min-h-screen  bg-slate-300  ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img alt=""  data-aos="zoom-in-up"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
        
              src="https://images.unsplash.com/photo-1496328488450-9c5c5d555148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              className=" max-w-sm   rounded-lg  "
            />
            <div className="p-5"   data-aos="fade-down"
            data-aos-offset="300"
            data-aos-delay="5000"
            data-aos-duration="3000">
              <h1 className="text-5xl font-bold">We Provide   Architech Design  for Clint Satisfection  </h1>
             
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
     );
};

export default Slider;
