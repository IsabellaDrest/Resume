import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import SocialFollowBottom from './SocialFollowBottom';
import "./AboutMe.css"
import "./custom.css"
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
                    My name is Isabella Drest Rasmussen and I am currently doint my masters in Computer Science at the IT- University of Copenhagen. 
                    I build this page using React Javascript, and I hope you enjoy it, and will take the time to read a bit about me, and I will look forward to hopefully hearing from you.
                      <ul>
                        <li>Email: isabella.drest@gmail.com</li>
                        <li>Phone: +45 52487402</li>
                      </ul>
                    </p>
              </div> 

              <div className="contentDiv">
                <p className="text">
                  <p className="underHeadline">About me</p>
                  I am from Odense, Denmark where I lived the first 18 years of my life. 
                  I have always had a great interest and curiosity for computers and technology. 
                  This interest primaryly started with playing games on my granddads computer, 
                  but as I got older I gained a great interest for software developing and programming, which eventually led the decision of taking a bachelor's degree within software development, and following after with a master's in Computer Science. </p>
                    <img src={Background} className="horizontalPhoto"alt="pp"/>
              </div> 

              <div className="contentDiv">
                <img src={Swimming} className="verticalPhoto"alt="pp"/>
                  <p className="text">
                    <p className="underHeadline">Swimming</p>
                    While living in Odense, I had a passion for swimming. 
                    I was an elite swimmer throughout most of my youth, and became a member of Team Denmark when i started High School.
                    I practised swimming 28 hours per week while maintaining school. Besides being a competetive simmer in the pool, I also became I competetive open water swimmer, where I became part of a developing national team at the age of 16. 
                    Unfortunately I had to quit swimming at age 17, due to several injuries. My experiences as an elite swimmer has made me a very organized and structured person, and equally determined and competetive.
                     </p>
              </div> 

              <div className="contentDiv">
                  <p className="text">
                    <p className="underHeadline">Paris</p>
                    After high school I decided to have a gap year, before starting university. I decided to spend my year in Paris, being an au pair for a french family.
                    During this year I helped the family with daily chores and took care of the children. I also participated in a french course, and from that I have gained some understanding of French.
                    While in Paris, I decided that I wanted to study Software Development. This required the course <i>Mathematics</i> on a higher level than I had at that time,
                    and I therefor upgraded my math via an online course all while living in France, endning the course with the grade 12.
                     </p>
                     <img src={Paris} className="verticalPhoto "alt="pp"/>
              </div> 

              <div className="contentDiv">
                <img src={University} className="verticalPhoto"alt="pp"/>
                  <p className="text">
                    <p className="underHeadline">Software Development, ITU</p>
                    I decided to do my bachelor's degree in Copenhagen at the IT-University of Copenhagen. 
                    Here I choose a bachelor in Software Development, where the main focus was on programming, but also courses regarding design and business was offered.
                    Before joining ITU I had no prior experience with programming, and thus learned everything from the beginning. I enjoyed the challenge, and loved many of the courses I participated in, although several were challenging. <br /><br />

                    For my bachelorproject I investigated why there are so few women in the tech/programming industry and what could be done to attract more woman to the field.
                    This resulted in a website which had a purpose of introducing women to programming by explaining simple terms, informing about possible jobs when working in tech, 
                    information about woman who have been or are working in tech, and a site with small programming exercises for the user to try. <br /><br />

                    After I finished my degree in the summer 2022, I decided to continue at ITU with a master's degree in Computer Science, with a focus on cybersecurity. 
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
