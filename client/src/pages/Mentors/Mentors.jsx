import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import HeartSearchIcon from '../SearchIcon/SearchIcon';
import person1 from '../../images/person1.svg';
import person2 from '../../images/person2.svg';
import person3 from '../../images/person3.svg';
import person4 from '../../images/person4.svg';
import person5 from '../../images/person5.svg';
import person6 from '../../images/person6.svg';
import LogoImage from '../../images/logoqueen.jpg';

const port = process.env.PORT || 5001;

const Mentors = () => {
  document.body.style.backgroundColor = 'pink';
  const [allMentors, setAllMentors] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:${port}/Mentors`)
      .then(response => setAllMentors(response.data))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  const getImageForMentor = (imageName) => {
    switch (imageName) {
      case 'person1.svg':
        return person1;
      case 'person2.svg':
        return person2;
      case 'person3.svg':
        return person3;
      case 'person4.svg':
        return person4;
      case 'person5.svg':
        return person5;
      case 'person6.svg':
        return person6;
      default:
        return person1;
    }
  };

  return (
    <div className="mentors d-flex flex-column align-items-center">
      <div className="search-bar mb-4">
        <HeartSearchIcon />
      </div>

      <Row className="mb-4">
  {allMentors?.map((item, index) => (
    <React.Fragment key={item.id}>
      <Col className="text-center mb-4">
        <Link to={`/Mentors/${item.id}`} key={item?.id}>
          <Card style={{ width: '18rem', marginLeft: '90px' }} className="text-center">
            <Card.Img
              variant="top"
              src={getImageForMentor(item.image)}
              width={250}
              height={250}
            />
            <Card.Body>
              <Card.Title className="mb-2 font-weight-bold">{item.name}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{item.profession}</Card.Subtitle>
              <Button as={Link} to={{pathname:`/Mentors/:${item.id}`}} variant="primary" className="btn-custom">
                View Mentor Information
              </Button>
            </Card.Body>
          </Card>
        </Link>
      </Col>
      {index > 0 && (index + 1) % 3 === 0 && <div className="w-100" />} {/* Add a new row after every three cards */}
    </React.Fragment>
  ))}
</Row>
<div className="mt-4">
        <img src={LogoImage} alt="Logo" width={200} height={100} />
      </div>
    </div>
   
  );
};

export default Mentors;



