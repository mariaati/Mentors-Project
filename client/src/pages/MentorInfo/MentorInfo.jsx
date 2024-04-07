import React, { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { FaLinkedin, FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import LogoImage from '../../images/logoqueen.jpg';
import './MentorInfo.css';


export default function MentorInfo() {
  const port = process.env.PORT || 5001;
  let { id } = useParams();
  document.body.style.backgroundColor = 'pink';

  const [item, setItem] = useState(null);
  const [showMessageInput, setShowMessageInput] = useState(false);
  const [message, setMessage] = useState('');

  const handleShowMessageInput = () => setShowMessageInput(true);
  const handleSendMessage = () => {
    // Add logic to send the message
    console.log('Message sent:', message);
    // Close the message input after sending
    setShowMessageInput(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:${port}/Mentors/${id}`)
      .then(response => setItem(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  return (
    <section className="d-flex justify-content-center align-items-center">
      
      <MDBRow style={{ marginLeft: '400px', position: 'relative' }}>
        <MDBCol lg="6">
          <MDBCard className="mb-4" style={{ marginTop: '50px',width:'500px',marginRight:'450px'}}>
            <MDBCardBody className="text-center">
            
            <Link to="/Mentors" className="back-link">
  <div className="back-icon-container">
    <IoArrowBackCircleOutline className="back-button" />
  </div>
</Link>
              <MDBCardImage 
                  src={item?.image ? require(`../../images/${item.image}`) : ''}
                className="rounded-circle"
                style={{ width: 'px', height: '450px', objectFit: 'cover' }}
                fluid
              />
              <p className="text-muted mb-2 fs-5">{item?.name}</p>
              <p className="text-muted mb-4 fs-6">{item?.profession}</p>
              <div className="d-flex justify-content-center mb-2">
                <Button variant="outline-secondary" className="ms-2" onClick={handleShowMessageInput}>
                  Message
                </Button>
              </div>
              {/* Message input section */}
              {showMessageInput && (
                <Form className="mt-3">
                  <Form.Group controlId="messageForm">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSendMessage}>
                    Send Message
                  </Button>
                </Form>
              )}
              {/* Icons section */}
              <div className="d-flex justify-content-center mb-2">
  <FaLinkedin className="linkedin icon" style={{ fontSize: '2em' }} />
  <FaPhoneSquare className="phone icon" style={{ fontSize: '2em' }} />
  <MdEmail className="email icon" style={{ fontSize: '2em' }} />
  <IoLogoWhatsapp className="whatsapp icon" style={{ fontSize: '2em' }} />
</div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
