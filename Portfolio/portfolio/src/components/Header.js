import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import Typical from 'react-typical'
import scrollTo from "gatsby-plugin-smoothscroll"
import styled, { keyframes } from "styled-components";
import { bounce } from 'react-animations';
import Swing from 'react-reveal/Swing';

const bounceAnimation = keyframes`${bounce}`;
const BounceDiv = styled.div`
animation: infinite 3.5s ${bounceAnimation};
`;

// Landing Page

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <div className="emoji">
                <Swing count={3} duration={1500}>
                  👋
              </Swing>
              </div>


              <br></br>
              I am a
              <Typical
                steps={[' developer.', 2000, ' designer.', 2000, ' program manager.', 2000]}
                loop={Infinity}
                className="inline"
                wrapper="p"
              />
            </h2>
          </Fade>

          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building Applications"}
                <span role="img" aria-label="Emoji">
                  📱
                  </span>
              </h1>
              <h1>
                <br></br>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "Designing Prototypes"}
                <span role="img" aria-label="Emoji">
                  🎨
                  </span>
              </h1>
              <h1>
                <br></br>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "Managing Projects"}
                <span role="img" aria-label="Emoji">
                  🧑‍🤝‍🧑
                  </span>
              </h1>
            </div>
          </Fade>

          <Fade bottom>
            <br></br><br></br><br></br><br></br>

            <button onClick={() => scrollTo("#about")}>
              <BounceDiv>
                <img width="60" height="60" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
              </BounceDiv>
            </button>


          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
