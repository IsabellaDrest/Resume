import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ParticlesBg from 'particles-bg'
import SocialFollowBottom from './SocialFollowBottom';
import "./Education.css"
import "./custom.css"




export class Education extends Component {
  static displayName = Education.name;

 

  render () {
    
        
    
    return (
      <div className ="page" >
        <ParticlesBg className="background" type="cobweb" bg={true} />
            <div className="infoBox">
            <div class="separator">
                <div class="line1"></div>
                    <h1 className="headlineE">Education</h1>
                <div class="line2"></div>
            </div>

                <VerticalTimeline>
                <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2022 - present"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">MSc in Computer Science</h3>
                        <h4 className="vertical-timeline-element-subtitle">IT-University of Copenhagen, Copenhagen</h4>
                        <p>
                        Following course regarding programming, algorithm design and security. 
                        My master's degree will be specialized within cybersecurity, by following courses as <i>Ethical Hacking</i>, <i>Cryptography</i> and <i>Cryptograpic Computation and Blockchain</i>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2019 - 2022"
                        iconStyle={{ background: '#2B3242', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">BSc in Software Development</h3>
                        <h4 className="vertical-timeline-element-subtitle">IT-University of Copenhagen, Copenhagen</h4>
                        <p>
                        During this bachelor I attented courses that covered several wide areas of programming. A course was <i>Algorithms and Data Structures<i> in which I programmed several algorithms in Java. 
                        I have also had courses involving functional programming in F#, these were <i>Programs as Data</i> and <i>Functional programming</i>. 
                        Regarding databases I have completed the course <i>Introduction to Database Systems</i>, in which I learned and worked with PSQL. 
                        Many more courses were completed, here amongst courses working with C#, C, React JavaScript. Many of these courses came together during the first year project, which involed developing a working navigation map over Denmark, which we developed in Java.
                        The second year project involved building a platform for teaching companies the rules of GDPR, which was build using React and C#.
                        The bachelor equally involved courses regarding design, including <i>Systematic design of user interface</i>. 
                        Equally I have also completed courses regarding business and organizational work, amongst these were <i> System Development and Project Organisation</i> and <i> Business Processes and Organisation</i>
                        For my bachelorproject I investigated why there are so few women in the tech/programming industry and what could be done to attract more woman to the field.
                        This resulted in a website which had a purpose of introducing women to programming by explaining simple terms, informing about possible job options when working in tech, 
                          information about woman who have been or are working in tech, and site with small programming exercises for the user to try.
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
                        Majors in Mathematics, English and Social studies. I was a part of 'Tornbjerg Elite' and 'Team Danmark', 
                        as I was an elite swimmer and practiced 28 hours per week while attending high school. 
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
             <div className ="bottembar" >
                <SocialFollowBottom />
            </div>
      </div>
   
    );
  }
  }
  
