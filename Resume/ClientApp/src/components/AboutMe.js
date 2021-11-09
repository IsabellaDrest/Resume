import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import SocialFollowBottom from './SocialFollowBottom';
import "./AboutMe.css"
import AboutMePhoto from "./Images/aboutMePhoto.JPG"
import Background from "./Images/Background.JPG"
import Swimming from "./Images/swimming.png"


export class AboutMe extends Component {
  static displayName = AboutMe.name;

  render () {
    return (
     
      <div className ="page" >
        <ParticlesBg className="background" type="cobweb" bg={true} />
          <div className="infoBox">
             <h1 className="headline">About me</h1>
              <div className="contentDiv">
                <img src={AboutMePhoto} className="aboutMePhoto "alt="pp"/>
                  <p className="overallText">My name is Isabella Drest Rasmussen and I am 22 years old. I am from Odense, Denmark and I am studying Software development at the IT- University of Copenhagen, where I am currently doing my fifth semester.
                    I am seeking the position as Student Software Developer. </p>
              </div> 

              <div className="contentDiv">
                <p className="overallText">I am Isabella Drest (22), from Denmark (Odense) and I am studying Software development at the IT- University of Copenhagen, where I am currently doing my fifth semester.
                  I am seeking the position as Student Software Developer. </p>
                    <img src={Background} className="backgroundPhoto "alt="pp"/>
              </div> 

              <div className="contentDiv">
                <img src={Swimming} className="swimmingPhoto "alt="pp"/>
                  <p className="overallText">I am Isabella Drest (22), from Denmark (Odense) and I am studying Software development at the IT- University of Copenhagen, where I am currently doing my fifth semester.
                    I am seeking the position as Student Software Developer. </p>
              </div> 
          </div>  

      <div className ="bottembar" >
        <SocialFollowBottom />
      </div>
    </div>
   
    );
  }
}