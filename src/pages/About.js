import React from 'react';
import { Navigate } from 'react-router-dom';
import Image from '../image/dog.jpg'
import Image2 from '../image/dog2.jpg'
import '../index.css';


function About () {
  return (
    <div className="about">
      <div className="aboutContainer">
        <h1>Buddy's Private On-Leash Dog Walking Service</h1>
        <img className="dog" src={Image2}/>
        </div>
        <div className="aboutText">
        <p>

We strive to provide an on-leash dog walking service that is easy, pleasant and stress-free for both you and your dog.
Every new client is preceded by a thorough consultation between us and the pet parent about the dog's needs and temperament.
Our dog walkers are experienced and truly passionate about their work. They take great care of your dog, making sure that your dog feels at ease, happy
and well exercised.</p>
</div>
<div className="aboutContainer2">
               <img className="dog2" src={Image}/>
        </div>
        <div className="aboutText2">
          <p>
            Having completed more than 100,000 dog walks, we have seen it all! Combined, we have a lot of experience and we know
            there is nothing more important than knowing your dog is well cared for when with us. Nothing compares to the one-on-one attention
            a dog receives during a private on-leash walk with one of our experienced, bonded dog walkers. </p>

        

            <ul>
              <li><h2>Our prices can't be beat!</h2></li>
              <li>15 Minute Walk $21.00</li>
              <li>30 Minute Walk $24.00</li>
              <li>45 Minute Walk $27.00</li>
              <li>1 Hour Walk $30.00</li>
              <li></li>
              </ul>

        </div>
</div>
  )
}

export default About;

