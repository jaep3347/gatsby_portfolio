import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import jp from "../images/aboutme.jpg"

const mail = () => {
  window.location.href = `mailto:${data.contactEmail}`;
}

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom>
              <h1>About Me</h1>

              <br></br>
              <p>
                Hi! I'm JP Park. I am a junior at <b>Carnegie Mellon University</b> pursuing a B.S. degree in <b>Information Systems</b> and <b>Human-Computer Interaction</b>.
              <br></br>
                <br></br>
                {data.aboutParaTwo}
                <br></br>
                <br></br>
                {data.aboutParaThree}
              </p>
            </Fade>
            <br></br>
            {/* Send Email */}
            <Fade bottom>
              <div id="container2"> 
                <button className="learn-more" onClick={mail}>
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Connect!</span>
                </button>
              </div>
            </Fade>
          </div>
          {/* Image Container on the Right */}
          <Fade bottom>
            <div className="image-wrapper">
              <img src={jp} alt="about"></img>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default About
