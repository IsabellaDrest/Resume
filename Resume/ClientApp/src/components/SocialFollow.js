import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faGithub, 
}from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './SocialFollow.css';

library.add(faEnvelope);

export default function SocialFollow() {
    return (
        <div class="social-container">
        <a target="_blank" href="https://www.linkedin.com/in/isabella-drest-rasmussen-3aa8b21a4/"
            className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a target="_blank" href="https://github.com/IsabellaDrest"
            className="github social">
                <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a target="_blank" href="https://www.facebook.com/isabella.drestrasmussen"
            className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <Mailto email="isabella.drest@gmail.com">
        <FontAwesomeIcon className="mailSocial" icon={faEnvelope} size="3x" />
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