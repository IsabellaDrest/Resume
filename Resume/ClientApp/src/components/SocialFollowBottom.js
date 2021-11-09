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

library.add(faEnvelope);

export default function SocialFollow() {
    return (
        <div class="social-container">
        <a href="https://www.linkedin.com/in/isabella-drest-rasmussen-3aa8b21a4/"
            className="linkedinSocial">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="https://github.com/IsabellaDrest"
            className="githubSocial">
                <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="https://www.facebook.com/isabella.drestrasmussen"
            className="facebookSocial">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <Mailto email="isabella.drest@gmail.com">
        <FontAwesomeIcon className="mailSocialBottom" icon={faEnvelope} size="3x" />
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