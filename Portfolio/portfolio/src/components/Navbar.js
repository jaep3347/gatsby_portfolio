import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import resume from '../pdf/resume.pdf';
import logo from '../images/logo2.png';


const Navbar = () => {

  return (
    <div className="section" id="top">
      <div className="container" id="sticky">
        <div className="navbar-wrapper">


          <button onClick={() => scrollTo("#realtop")} className="name">
            <img src={logo} alt="logo"></img>
          </button>

          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About Me</button>
            <button onClick={() => scrollTo("#design")}>Design</button>
            <button onClick={() => scrollTo("#develop")}>Develop</button>
            <button onClick={(e) => {
              e.preventDefault();
              window.open(
                resume,
                '_blank'
              );
            }}>Résumé</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
