import React from "react"
import { GithubRepoDisplay } from "github-repo-display-react"

import Fade from "react-reveal/Fade"

const Develop = () => {
  return (
    <div className="section" id="develop">
      <div className="container">
        <div className="develop-container">
          <Fade bottom>
            <h1>Develop 📱</h1>
          </Fade>
          <br></br>
          <Fade bottom>
            <GithubRepoDisplay
              numOfrepos={6}
              userName='jaep3347'
              showStars={true} // displays stars
              showLanguage={true} // displays language
            />
          </Fade>
        </div>

      </div>
    </div>
  )
}

export default Develop
