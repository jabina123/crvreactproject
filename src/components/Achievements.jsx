import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";

function Achievements() {
  return (
    <div className='container'>
        <h1 className="text-center my-5">Achievements</h1>
        <div className="row">
        <div className="col-md-4">
         <Card>
      
      <Card.Body>
      <Card.Title className='text-center'><FaStar className='achicons text-primary' /></Card.Title>
      <Card.Title className='text-center'> UEFA Champions League</Card.Title>
        <Card.Text className='text-center'>
        Won 5 UEFA Champions League titles.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card>
      
      <Card.Body>
      <Card.Title className='text-center'><FaTrophy className='achicons text-warning' /></Card.Title>
      <Card.Title className='text-center'> 5 Ballon d'Or</Card.Title>
        <Card.Text className='text-center'>
       
        Awarded for his outstanding football career.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className="col-md-4">
    <Card>
      
      <Card.Body>
      <Card.Title className='text-center'><FaCrown className='achicons text-success' /></Card.Title>
      <Card.Title className='text-center'> European Champion</Card.Title>
        <Card.Text className='text-center'>
        Led Portugal to victory in Euro 2016.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
        </div>
       
    </div>
    
   
  );
}

export default Achievements;