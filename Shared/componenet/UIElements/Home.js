import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";
import Peter from "./../../../assets/mapic.png"

const Home = props=>{ 
    return(
        <>
        <div className="portifolio">
            <img src={Peter} className="mypic" alt="Peter Messay Picture"/>
         
         <div className="about-container"> <h1 className="wellcome">Welcome to My Site</h1><br/><br/>
           <h3 className="about">About My work</h3><br/><br/>
            <p className="lorem">Welcome to my Site! I an passionate about creating 
            innovative soloutions through coding and design with 
            a strong foundation in web development and a keen eye for a detail. 
            I strive to deliver high-quality results thst exceed expectations. 
             My goal is to bring your ideas to life and provide a seamless digital
             experiance for your user</p>
             
             <div className="btn-container">
  
                         <NavLink to="/u1/places" className="resume-btn btn">View Resume</NavLink> 
                         <NavLink to="/places/new" className="explore-btn btn">Explore Projects</NavLink>
                         <NavLink to="/Places/Contact"  className="get-btn btn">Get in touch </NavLink>
                        </div> </div> 
       
            
        </div>       
        </>
    );
}
export default Home;