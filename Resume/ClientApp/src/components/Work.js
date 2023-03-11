import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ParticlesBg from 'particles-bg'
import SocialFollowBottom from './SocialFollowBottom';
import "./Work.css"
import "./custom.css"





export class Work extends Component {
  static displayName = Work.name;

 

  render () {
    
        
    
    return (
      <div className ="page" >
        <ParticlesBg className="background" type="cobweb" bg={true} />
             <div className="infoBox">
             <div class="separator">
                <div class="line1"></div>
                    <h1 className="headline">Work</h1>
                <div class="line2"></div>
            </div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - Present"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Student Worker - Software Developement</h3>
                        <h4 className="vertical-timeline-element-subtitle">LEGO Group, Copenhagen</h4>
                        <p>
                        Software Developement in Developer Experience</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2020 - 2023"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">IT-Student Assistant at Danish Shipping</h3>
                        <h4 className="vertical-timeline-element-subtitle">Danish Shipping, Copenhagen</h4>
                        <p>
                        It-supporter of several systems including Microsoft, phone systems, monitor systems and setting up computers.                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018 - 2019"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Au pair in France</h3>
                        <h4 className="vertical-timeline-element-subtitle">Paris, France</h4>
                        <p>
                        Lived with a French family, helping with everyday chores, and taking care of their children.
                        Studied French.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017 - 2018"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Receptionist at Mercedes P.Christensen</h3>
                        <h4 className="vertical-timeline-element-subtitle">P.Christensen, Odense</h4>
                        <p>
                        Reception work and helped at customer service 
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2017 - 2018"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Swimming coach</h3>
                        <h4 className="vertical-timeline-element-subtitle">H2Odense, Odense</h4>
                        <p>
                        Coaching children in the ages 8-13 in swimming, and aqua fitness instructor for women
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2016"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Elite swimmer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Swim Team Odense / H2Odense, Odense</h4>
                        <p>
                        28 hours of practice/ week
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2012 - 2015"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Office girl at Signs & Marks</h3>
                        <h4 className="vertical-timeline-element-subtitle">Signs & Marks, Odense</h4>
                        <p>
                        Cleaning, handling goods, warehouse packaging and finalizing collections and trend boards                         </p>
                    </VerticalTimelineElement>
                    
                    
                    
                </VerticalTimeline>
             </div>  
             <div className ="bottembar" >
                <SocialFollowBottom />
            </div>
      </div>
   
    );
  }
  }
  
