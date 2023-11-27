
const pool = require('./db'); 
const queries = require('./queries');

 const getStudents = (req, res) => {  //all the students
 pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentById = (req, res)=>{  //specific student
    const id= parseInt(req.params.id);
    pool.query(queries.getStudentById, [id] ,(error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};
const addStudent = (req,res) =>{  //add student
    const{name, email, age, dob}=req.body;

    //check if email exist
    pool.query(queries.checkEmailExists,[email], (error,results) =>{
         if (results.rows.length) {
            res.send("email already exist.");
         }
         //add student to db
         pool.query(
            queries.addStudent, 
            [name, email, age, dob],
             (error,results) => {
              if (error) throw error;
              res.status(201).send("student Created successfuly");
              
         }
      );              
    });
  };
      const removeStudent=(req,res) => {
        const id = parseInt(req.params.id);

        pool.query(queries.getStudentById,[id],(error,results)=>{
            const noStudentFound = !results.rows.length;
            if (noStudentFound) {
                res.send("students does not exist in the database ,could not remove.");
            }

            pool.query(queries.removeStudent,[id],(error,results)=> {
                if (error) throw error;
                res.status(200).send("student remove susccesfuly");
            });
            
        });
      };

        const updateStudent = (req,res) =>{
            const id = parseInt(req.params.id);
            const { name  } = req.body;

            pool.query(queries.getStudentById ,[id],(error,results)=>{
                const noStudentFound = !results.rows.length;
            if (noStudentFound) {
                res.send("students does not exist in the database ,could not remove.");
            }
            pool.query(queries.updateStudent,[name,id], (error,results)=>{
                if (error) throw error;
                res.status(200).send("student update successfully");
            });
            });
        };




module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
};

