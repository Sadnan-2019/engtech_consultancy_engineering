import React from 'react';

const LandingPage = () => {
     return (

      <div>

<h2 className="text-center text-slate-800 text-4xl font-bold   py-10">
        Our Gallary
      </h2>
              <div className='py-10' 
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="5000"
          data-aos-duration="2000" 
           
          
          class="hero min-h-screen"   style={{backgroundImage: `url("https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")`}}>


          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold text-slate-50">Hello there</h1>
              <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button class="btn btn-primary">More Gallary</button>
            </div>
          </div>
        </div>
      </div>
     );
};

export default LandingPage;