// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import facebookIcon from "./images/facebook.svg"
import instagramIcon from "./images/instagram.svg"
import design1 from "./pdf/design1.pdf"
import design2 from "./pdf/design2.pdf"
import design3 from "./pdf/design3.pdf"


export default {

  // Header Details ---------------------
  name: "JP",
  headerTagline: [
    //Line 1 For Header
    "Building Applications.",
    //Line 2 For Header
    "Designing Prototypes.",
    //Line 3 For Header
    "Managing Projects.",
  ],
  // Header Paragraph
  headerParagraph:
    "I strive to take part in projects that happen at the intersection of technology and human interaction.",

  // Contact Email
  contactEmail: "jaepyunp@andrew.cmu.edu",

  // End Header Details -----------------------


  // Design Section ------------------------
  projects: [
    
    {
      id: 1, 
      title: "Shall Make, Shall Be", 
      para:
        "typography · color · grid · information architecture", 
      imageSrc:
        "https://source.unsplash.com/5DDYHjk_KMU",
      url: design1,
    },
    {
      id: 2, 
      title: "Adidas Dashboard", 
      para:
        "data visualization · motion · control", 
      imageSrc:
        "https://source.unsplash.com/zMaQFh-0ajA",
      url: design2,
    },
    {
      id: 3, 
      title: "Air Purifier Control", 
      para:
        "rapid prototyping · foamboard · usability", 
      imageSrc:
        "https://cdn.thewirecutter.com/wp-content/uploads/2019/09/airpurifiers-2x1-2716.jpg",
      url: design3,
    },
    

  ],

  // End Design Section -----------------------



  // About Secton --------------
  aboutParaOne:
    "Hi! I'm JP Park. I am a junior at Carnegie Mellon University pursuing a B.S. degree in Information Systems and Human Computer Interaction.",
  aboutParaTwo:
    "I always strive to take part in projects that happen at the intersection of technology and human interaction.",
  aboutParaThree:
    "I enjoy building beautiful interfaces and experiences on digital products whether that be websites or applications. As a design-minded software engineer, I sometimes design prototypes for these products as well. Whether I am developing, designing or project managing, my goal is to provide a long-lasting relationship between people and services I create.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  // End About Section ---------------------



  // Footer Section --------------

  social: [
    { id:1, img: githubIcon, url: "https://github.com/jaep3347" },
    {
      id:2,
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/jpark0502/",
    },
    { id:3,
      img: facebookIcon,
      url: "https://www.facebook.com/jppark97/",
    },
    { id:4,
      img: instagramIcon,
      url: "https://www.instagram.com/jpxrky",
    },
  ],

  // End Footer Section ---------------
}