import React from 'react';
import './bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Header from './Header';

function Home() {
  return (
    <div className='home'>
        <Header/>
        <section className="hero text-center">
        <div className="container">
          <h1 className="display-4 sign-up-home">Transforming financial literacy into an engaging and rewarding journey for everyone</h1>
          <a href="/signup" className="btn btn-primary sign-up-btn-home btn-lg mt-4">Sign Up</a>
        </div>
      </section>
    </div>
  )
}

export default Home