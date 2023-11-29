import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mentors from './pages/Mentors/Mentors';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MentorInfo from './pages/MentorInfo/MentorInfo';
import { propTypes } from 'react-bootstrap/esm/Image';
const port = process.env.PORT || 5001;



  function App() {

    return (
            <Router>
                    <Routes>
                           <Route path="/Mentors" element={<Mentors/>} />
                           <Route path="/Mentors/:id" element ={<MentorInfo/>} />

                    </Routes>
            </Router>
    );
  }





export default App;
