import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <div className="contactbg py-5">
      <div className="container">
        
        <h1 className="text-center text-white mb-4">Contact</h1>

       
        <div className="d-flex justify-content-center">
          <Form className="w-75">
            <Row className="mb-3">
             
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
            </Row>

            
            <Form.Group className="mb-3" controlId="formGridMessage">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
              />
            </Form.Group>

           
            <div className="text-center">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
