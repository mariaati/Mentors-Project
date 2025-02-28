const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;
const data = require('./db.js');
const { Console } = require('console');


/*
CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts
cross-origin HTTP requests with other servers and specifies which domains access your resources.
We will use this Node.js package to allow cross-origin requests.
 */


app.use(cors());
app.use(express.json());
// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/Mentors', (req, res) => {

  res.send(data);
});
app.get(`/Mentors/:id`, (req, res) => {
  const mentor = req.params.id;
  //console.log(`Fetching data for mentor with id: ${mentorid}`);
  console.log('hiii');
  console.log(mentor);
  let id = Number(mentor);

console.log([id]);
  res.send(data.getStudentById(id));
});

app.get('*', (req, res) => {
  // res.send('Anything else');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
