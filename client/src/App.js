import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mentors from './pages/Mentors/Mentors';


const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  //useEffect(() => {
  //  axios.get(`http://localhost:${port}/api/helloworld`)
    //  .then(response => setMessage(response.data))
    //  .catch(error => console.error(`There was an error retrieving the message: ${error}`))
 // }, [])

  return (
    <div className="App">
   <Mentors></Mentors>
    </div>
  );
}

export default App;
