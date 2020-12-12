import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import scrollTo from "gatsby-plugin-smoothscroll"
import styled, { keyframes } from "styled-components";
import { bounce } from 'react-animations';
import indexfinger from "../images/indexfinger.png"

const bounceAnimation = keyframes`${bounce}`;
const BounceDiv = styled.div`
animation: infinite 3.5s ${bounceAnimation};
`;

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <br></br><br></br><br></br>
          {/* Scroll back to top  */}
          <Fade bottom>
            <button onClick={() => scrollTo("#realtop")}>
              <BounceDiv>
                <img width="25" height="40" alt="" src={indexfinger} />
              </BounceDiv>
            </button>
          </Fade>
          {/* Four Social Icons */}
          <Fade bottom>
            <div className="social-icons">
              {data.social.map(socialLink => (
                <a
                  key = {socialLink.id}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={socialLink.img} alt="icons"></img>
                </a>
              ))}
            </div>
            <span>
              Copyright © 2020 JP Park. All rights reserved.
            </span>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer
