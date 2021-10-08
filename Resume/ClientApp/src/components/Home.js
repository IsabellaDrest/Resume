import React, { Component } from 'react';
import './Home.css';
import Profile from "./Images/profile.jpg"
import ParticlesBg from 'particles-bg'
import SocialFollow from './SocialFollow';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
     
      <div className ="context" >
        <ParticlesBg className="background" type="cobweb" bg={true} />
         
      <div className ="profilePicture">
        <img src={Profile} className="billede "alt="pp"/>
        <h1>Isabella Drest Rasmussen</h1>
        <h2> Student Software Developer</h2>
        <SocialFollow />
      </div> 
      </div>
   
    );
  }
}
