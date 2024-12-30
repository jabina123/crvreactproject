import React from "react";
import Button from 'react-bootstrap/Button';
function About(){
    return(

        <div className="container" >
             <h1 className="text-center my-5">About Cristiano Ronaldo</h1>
             <div className="row">
             <div className="col-md-6 d-flex justify-content-center ">
            <img className="aboutimage" src="https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg"></img>
           </div>
           <div className="col-md-6 d-flex justify-content-center flex-column align-items-center">
            <p >
            Cristiano Ronaldo is one of the greatest football players of all time. Known for his unmatched dedication, skill, and athleticism, he has won multiple Ballon d'Or awards and led his teams to numerous championships. Off the field, Ronaldo is a philanthropist and a global inspiration.
            </p>
           <span><Button variant="dark">Explore Achievements</Button></span> 
           </div>
             </div>
          
        </div>
    );
}
export default About;