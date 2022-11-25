import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faGithub, 
}from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './SocialFollowBottom.css';
import "./custom.css"


library.add(faEnvelope);

export default function SocialFollow() {
    return (
        <div class="social-container">
        <a target="_blank" href="https://www.linkedin.com/in/isabella-drest-rasmussen-3aa8b21a4/"
            className="linkedinSocial">
                <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank" href="https://github.com/IsabellaDrest"
            className="githubSocial">
                <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a target="_blank" href="https://www.facebook.com/isabella.drestrasmussen"
            className="facebookSocial">
                <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <Mailto email="isabella.drest@gmail.com">
        <FontAwesomeIcon className="mailSocialBottom" icon={faEnvelope} />
        </Mailto>
        </div>
    );
}

function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }