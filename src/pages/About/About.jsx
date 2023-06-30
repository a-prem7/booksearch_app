import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
    return (
      <section className='about'>
        <div className='container'>
          <div className='section-title'>
            <h2>About</h2>
          </div>
  
          <div className='about-content grid'>
            <div className='about-img'>
              <img src = {aboutImg} alt = "" />
            </div>
            <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookQuest</h2>
            <p className='fs-17'>Welcome to our BookQuest app! This is your go-to destination for discovering and exploring a wide range of books. Whether you're an avid reader, a curious learner, or simply looking for your next literary adventure, our app provides a user-friendly platform to find your perfect book match.</p>
            <p className='fs-17'>Whether you're seeking fiction, non-fiction, educational resources, or any other type of literature, our BookQuest app is here to help you embark on a journey of literary exploration. Start your book search today and unlock a world of captivating stories, fascinating knowledge, and endless inspiration. Happy reading!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About