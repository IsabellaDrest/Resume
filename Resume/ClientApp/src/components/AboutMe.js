import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import "./AboutMe.css"
import AboutMePhoto from "./Images/aboutMePhoto.JPG"


export class AboutMe extends Component {
  static displayName = AboutMe.name;

  render () {
    return (
     
      <div className ="page" >
      <ParticlesBg className="background" type="cobweb" bg={true} />
      <div className="infoBox">
        <h1 className="headline">About me</h1>
        <img src={AboutMePhoto} className="aboutMePhoto "alt="pp"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor id enim et pellentesque. Ut ac gravida libero, sit amet mattis eros. Etiam pellentesque dui sapien, non vulputate diam dapibus non. Phasellus ornare, est eget pharetra molestie, turpis dui mattis arcu, sit amet cursus arcu augue id diam. Suspendisse faucibus dolor nisl, a mattis tellus euismod quis. Donec quis dolor volutpat, congue purus elementum, feugiat dolor. Nunc efficitur ex sed lacinia convallis. Vivamus mattis nulla ut mauris dapibus, in molestie tellus rhoncus. Donec faucibus erat vitae est semper malesuada. Aliquam hendrerit vel ante id dictum. Vivamus massa purus, placerat suscipit finibus sit amet, condimentum vitae ipsum.
        Sed vel euismod erat. Curabitur id iaculis magna, at viverra nunc. Nullam consequat tempor lorem non congue. Aliquam eget enim quis velit tempor rhoncus. Pellentesque ut fringilla nulla, ut blandit enim. Morbi ornare augue nisi, nec feugiat justo scelerisque sit amet. Etiam convallis dui et malesuada condimentum. Etiam lacinia tellus nunc, nec vulputate nisi cursus eu. Sed ac molestie nulla, quis mollis ipsum. Pellentesque elit elit, bibendum vitae nunc ac, fringilla malesuada mauris. Duis ultrices lobortis condimentum. Donec porttitor ante tellus, id suscipit augue elementum quis. Suspendisse ut nisl sapien. Phasellus egestas viverra risus. Nunc euismod velit nec interdum convallis. Donec eleifend libero lectus, non lacinia nisi lacinia vel.
        Morbi fringilla pharetra sollicitudin.  </p>
      </div>  
      </div>
   
    );
  }
}