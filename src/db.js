// const Pool = require("pg").Pool;

// const pool = new Pool({

//     user:"postgres",
//     host:"localhost",
//     database:"students",
//     password:"Maria123",
//     port: 5432,
// });

// module.exports = pool;


// //data base 

const students = [
    {
      id: 1,
      name: "Yamama aghbarieh",
      profession: "FrontEnd",
      email: "yamama@example.com",
      location: "New York",
      image:"person1.svg",
    }  , 
{  id: 2,
    name: "Lana Aboumokh",
    profession: "JAVA",
    email: "lana5@example.com",
    location: "haifa",
    image:"person2.svg",



},
{
    id: 3,
    name: "Maria Atia",
    profession: "Full Stack",
    email: "maat@example.com",
    location: "haifa",
    image:"person3.svg",
}
,{
    id: 4,
    name: "Maya Atwan",
    profession: "Backend",
    email: "maat@example.com",
    location: "haifa",
    image:"person4.svg",
}
,{
    id: 5,
    name: "Hidaya Baraky",
    profession: "JAVA SCRIPT,HTML",
    email: "maat@example.com",
    location: "haifa",
    image:"person5.svg",
}
,{
    id: 6,
    name: "Shirley Kulbak",
    profession: "Frontend",
    email: "maat@example.com",
    location: "haifa",
    image:"person6.svg",
}


]



const getStudentById = (id) => {
    return students.find(student => student.id === id);
  };
  
  module.exports = {
    students,
    getStudentById,
  };
