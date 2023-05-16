import React from "react";
import "../src/MainContent.css";
import me from "./assets/Avatar.jpg"
import facebook from "./assets/facebook.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import mail from "./assets/Mail.svg";


export default function MainContent(){
    return (
        <>
        <div className="container">
            <div className="img-container">
                <img src={me} alt="" className="main-img" />
            </div>
            <div className="sub-container">
                <h2 className="name">Sebastian Coffey</h2>
                <h4 className="role">Frontend developer</h4>
                <h5 className="web">www.freecodecamp.org/scoffey</h5>
                <div className="connect">
                    <a href="mailto:scoffey@abc.gob.ar" className="mail">Email</a>
                    <a href="https://www.linkedin.com/in/sebastiancoffey" className="linkedin">Linkedin</a>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <p>I am an aspiring frontend developer. I am constantly learning and adopting new technologies and knowledge related to my future career.</p>
                </div>
                <div className="interest">
                    <h3>Interests</h3>
                    <p>Finance. Music. Technology. Sports. Health. I love connecting with new people, give me a shout at www.freecodecamp.org/scoffey</p>
                </div> 
            </div>

            <div className="footer">
                <a href="https://www.facebook.com/sebastiancoffey"><img className="facebook" src={facebook} alt="facebook" /></a>
                <a href="https://www.facebook.com/sebastiancoffey"><img className="github" src={github} alt="github" /></a>
                <a href="https://www.facebook.com/sebastiancoffey"><img className="linkedin" src={linkedin} alt="linkedin" /></a>
                <a href="https://www.facebook.com/sebastiancoffey"><img className="mail" src={mail} alt="mail" /></a>

            </div>
        </div>
        </>
    )
}