import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import picture from '../../images/person2.svg';

const Mentors = () => 
 { document.body.style.backgroundColor="pink";
    return (   <div >                   
<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} width={250} height={250}  />
        <Card.Body>
          <Card.Title>Yamama Ighabrieh</Card.Title>
          <Card.Text>
            python,SQL,JAVA,JS,CSS
          </Card.Text>
      
          <Card.Link href="#">email</Card.Link>
         
        </Card.Body>
      </Card>
                             
     </div>
    );
  };
  export default Mentors;


