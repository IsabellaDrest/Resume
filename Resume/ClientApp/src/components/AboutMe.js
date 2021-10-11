import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import "./AboutMe.css"


export class AboutMe extends Component {
  static displayName = AboutMe.name;

  render () {
    return (
     
      <div className ="page" >
      <ParticlesBg className="background" type="cobweb" bg={true} />
      <div className="infoBox">
        <h1>Dette handler om mig</h1>
      
      </div>  
      </div>
   
    );
  }
}