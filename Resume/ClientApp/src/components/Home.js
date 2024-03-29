import React, { Component } from 'react';
import PhoneNumber from 'react-phone-number';
import Profile from "./Images/profile.jpg"
import ParticlesBg from 'particles-bg'
import SocialFollow from './SocialFollow';
import './Home.css'
import './custom.css'


export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className ="context" >
        <ParticlesBg className="background" type="cobweb" width='100vw' height="100vh" bg={true} />
         
      <div className ="content">
        <div className="innerContent">
        <img src={Profile} className="billede "alt="pp"/>
        <h1>Isabella Drest Rasmussen</h1>
        <h2> Student Software Developer</h2>
        <SocialFollow />
        </div>
      </div> 
      </div>
   
    );
  }
}
