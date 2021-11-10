import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import SocialFollowBottom from './SocialFollowBottom';
import "./Skills.css"



export class Skills extends Component {
  static displayName = Skills.name;

  render () {
    return (
     
      <div className ="page" >
        <ParticlesBg className="background" type="cobweb" bg={true} />
          <div className="infoBox">
          <div class="separator">
          <div class="line1"></div>
              <h1 className="headline">Skills</h1>
          <div class="line2"></div>
          </div>
          <div className="allSkillBoxes">
          <div className="skillbox">
            <img src="https://img.icons8.com/ios-filled/50/000000/c-sharp-logo.png"/>
            <p>bytecode (local 0, 1, ...)
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios/50/000000/java-coffee-cup-logo--v1.png"/>
          <p>bytecode (local 0, 1, ...)
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png"/> 
          <p>bytecode (local 0, 1, ...) bytecode (local 0, 1, ...) bytecode (local 0, 1, ...) bytecode (local 0, 1, ...) bytecode (local 0, 1, ...)
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/60/000000/css3.png"/>
          <p>bytecode (local 0, 1, ...)
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios/50/000000/react-native--v1.png"/>
          <p>bytecode (local 0, 1, ...) 
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
          <p>bytecode (local 0, 1, ...)
            </p>
          </div>
        </div>
    </div>  

      <div className ="bottembar" >
        <SocialFollowBottom />
      </div>
    </div>
   
    );
  }

  
}