import React from 'react'
import Image from '../image/pup.jpg'
import '../index.css'


function Home() {
  return (
     <div className="home">
<div className="cupPup">
<img className='pup'src={Image}/>

</div>
<div className="homeText">


        <p><span class="first-word">
          Buddy's Dog Walking Service </span>is more than just a dog walking service.
          Our goal is to become a member of your extended family and get your dog tired!
          Through our daily high energy walking services, your dog is mentally and physically stimulated. 
          From the moment you contact us, we find out all there is to know about the routine
          that you and your dog want. After that it is all about fun, exercise,
          socialization, proper stimulation and reinforcing good habits.  Whether you 
          have a puppy or an older dog, we will figure out what works best for 
          you and your dog.
          </p>
          </div>
    </div>
  )
}

export default Home
