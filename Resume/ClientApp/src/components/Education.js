import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ParticlesBg from 'particles-bg'
import SocialFollow from './SocialFollow';
import "./Education.css"




export class Education extends Component {
  static displayName = Education.name;

 

  render () {
    
        
    
    return (
      <div className ="page" >
        <ParticlesBg className="background" type="cobweb" bg={true} />
             <div className="infoBox">
                <h1 className="headline">Education</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2019 - present"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor in Software Development</h3>
                        <h4 className="vertical-timeline-element-subtitle">IT-University of Copenhagen, Copenhagen</h4>
                        <p>
                        Following courses in both programming, design and business classes.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2019 - 2019"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Mathematics Level A</h3>
                        <h4 className="vertical-timeline-element-subtitle">Extra course, Online</h4>
                        <p>
                        Upgraded my mathematics level to A by an online course, while living in Paris.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2015 - 2018"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">High School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tornbjerg Gymnasium, Odense</h4>
                        <p>
                        Majors in Mathematics, English and Socialstudies. A part of 'Tornbjerg Elite' and 'Team Danmark', which I qualified to by being an elite swimmer. 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2005 - 2015"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Primary School</h3>
                        <h4 className="vertical-timeline-element-subtitle">Aadalskolen, Odense</h4>
                        <p>
                        Primary school from 0th to the 9th grade.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
              
             </div>  
             
      </div>
   
    );
  }
  }
  
