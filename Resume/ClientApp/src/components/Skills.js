import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import SocialFollowBottom from './SocialFollowBottom';
import "./Skills.css"
import "./custom.css"




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
          <p className="headLines"> Programming Languages</p>
          <div className="allSkillBoxes">
          <div className="skillbox">
            <img src="https://img.icons8.com/ios-filled/50/000000/c-sharp-logo.png"/>
            <p className="skill">C#
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios/50/000000/java-coffee-cup-logo--v1.png"/>
          <p className="skill">Java
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png"/> 
          <p className="skill"> HTML
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/60/000000/css3.png"/>
          <p className="skill">CSS
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios/50/000000/react-native--v1.png"/>
          <p className="skill">REACT
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"/>
          <p className="skill">JavaScript
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/sql.png"/>         
           <p className="skill">PSQL
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/programming-flag.png"/>          
          <p className="skill">F#
            </p>
          </div>
        </div>
        <p className="headLines"> Personal skills</p>

        <div className="allSkillBoxes">
          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/todo-list.png"/>            
          <p className="skill">Organized and detail orientated
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/goal.png"/>          
          <p className="skill">Ambitious and determined
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-design-creative-process-flatart-icons-outline-flatarticons-2.png"/>         
           <p className="skill"> Creative and design-minded
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/50/000000/external-positive-review-reputation-bearicons-glyph-bearicons.png"/>          
          <p className="skill"> Positive and outgoing
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/50/000000/external-Calculator-business-and-marketing-bearicons-glyph-bearicons.png"/>          
          <p className="skill"> Mathematic and numberminded
            </p>
          </div>
        </div>

        <p className="headLines"> Language</p>

        <div className="allSkillBoxes">
          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/denmark-map.png"/>          
          <p className="skill">Danish
            </p>
            <p className="skillU">Fluent
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/united-kingdom-map.png"/>          
          <p className="skill">English
            </p>
            <p className="skillU">Fluent
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/germany-map.png"/>           
          <p className="skill"> German
            </p>
            <p className="skillU">Understanding
            </p>
          </div>

          <div className="skillbox">
          <img src="https://img.icons8.com/ios-filled/50/000000/france-map.png"/>          
          <p className="skill"> French 
            </p>
            <p className="skillU">Understanding
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