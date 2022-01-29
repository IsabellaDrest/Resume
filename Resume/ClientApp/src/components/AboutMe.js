import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import SocialFollowBottom from './SocialFollowBottom';
import "./AboutMe.css"
import AboutMePhoto from "./Images/aboutMePhoto.JPG"
import Background from "./Images/Background.JPG"
import Swimming from "./Images/swimming.png"
import Paris from "./Images/paris.jpg"
import University from "./Images/University.png"


export class AboutMe extends Component {
  static displayName = AboutMe.name;

  render () {
    return (
     
      <div className ="page" >
        <ParticlesBg className="background" type="cobweb" bg={true} />
          <div className="infoBox">
          <div class="separator">
          <div class="line1"></div>
              <h1 className="headline">About me</h1>
          <div class="line2"></div>
          </div>
          
              <div className="contentDiv">
                <img src={AboutMePhoto} className="verticalPhoto "alt="pp"/>
                  <p className="text">
                    <p className="underHeadline">General Info</p>
                    My name is Isabella Drest Rasmussen and I am studying Software development at the IT- University of Copenhagen.
                    I am seeking the position as Student Software Developer.
                      <ul>
                        <li>Email: isabella.drest@gmail.com</li>
                        <li>Phone: +45 52487402</li>
                      </ul>
                    </p>
              </div> 

              <div className="contentDiv">
                <p className="text">
                  <p className="underHeadline">About me</p>
                  I am Odense, Denmark where I lived the first 18 years of my life. 
                  I have always had a great interest and curiosity in computers and technology. 
                  This interest primaryly started with playing games on my grandads computer, 
                  but as I got older I gained a great interest for developing and programming, which eventually led to taking a bachelors degree within software development. </p>
                    <img src={Background} className="horizontalPhoto"alt="pp"/>
              </div> 

              <div className="contentDiv">
                <img src={Swimming} className="verticalPhoto"alt="pp"/>
                  <p className="text">
                    <p className="underHeadline">Swimming</p>
                    While living in Odense, I had a passion for swimming. 
                    I was an elite swimmer throughout most of my youth, and became a member of Team Denmark when i started High School.
                    I practised swimming 26 hours per week while mainting school, which has made me a very organized and structured person, and equally determined and competetive.
                     </p>
              </div> 

              <div className="contentDiv">
                  <p className="text">
                    <p className="underHeadline">Paris</p>
                    While living in Odense, I had a passion for swimming. 
                    I was an elite swimmer throughout most of my youth, and became a member of Team Denmark when i started High School.
                    I practised swimming 26 hours per week while mainting school, which has made me a very organized and structured person, and equally determined and competetive.
                     </p>
                     <img src={Paris} className="verticalPhoto "alt="pp"/>
              </div> 

              <div className="contentDiv">
                <img src={University} className="verticalPhoto"alt="pp"/>
                  <p className="text">
                    <p className="underHeadline">Software Development, ITU</p>
                    While living in Odense, I had a passion for swimming. 
                    I was an elite swimmer throughout most of my youth, and became a member of Team Denmark when i started High School.
                    I practised swimming 26 hours per week while mainting school, which has made me a very organized and structured person, and equally determined and competetive.
                     </p>
              </div> 
          </div>  

      <div className ="bottembar" >
        <SocialFollowBottom />
      </div>
    </div>
   
    );
  }

  
}