import React from "react";
import Button from 'react-bootstrap/Button';
function Home(){
    return(

        <div id="homepage" className="text-white">
            <h1 className="fw-light fs-1">Cristiano Ronaldo</h1>
            <p>Football Legend | Record-Breaker | Global Icon</p>
            <Button variant="primary">Learn More</Button>
        </div>
    );
}
export default Home;