import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Nav, Button } from 'react-bootstrap';
import HeartSearchIcon from '../SearchIcon/SearchIcon';
import LogoImage from '../../images/logoqueen.jpg';
import person1 from '../../images/person1.svg';
import person2 from '../../images/person2.svg';
import person3 from '../../images/person3.svg';
import person4 from '../../images/person4.svg';
import person5 from '../../images/person5.svg';
import person6 from '../../images/person6.svg';
import person7 from '../../images/person7.svg';
import './MainPage.css';
import { Link } from 'react-router-dom';

const images = [person1, person2, person3, person4, person5, person6, person7];

const MainPage = () => {
  document.body.style.backgroundColor = 'pink';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) );
    }, 500); // Change the delay as needed (3000ms = 3 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="centered-content">
      <h1>QueenB - Women Mentors👑</h1>
        <h3>Elevate your ambitions, and together, let's create a future of limitless possibilities</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <Link to="/Mentors">
          <Button variant="primary" className="custom-button">
            Let's Start The Journey &rarr;
          </Button>
        </Link>
      </div>
      <div className="text-center">
        <div className="row">
          {images.map((image,index) => (
            <div key={index} className="col">
              {index<=currentImageIndex&& (
                <img src={image} alt={`Empowered Woman ${index + 1}`} className="animated-image" />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          {/* Centered logo image */}
          <img src={LogoImage} alt="Logo" width={200} height={100} className="mx-auto d-block" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
