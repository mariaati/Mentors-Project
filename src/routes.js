const {Router} = require("express");

const controller= require("./controller");

const router = Router();

router.get("/",controller.getStudents);//all students
router.get("/:id", controller.getStudentById);//specific student
router.post("/",controller.addStudent);
router.put("/:id",controller.updateStudent);
router.delete("/:id",controller.removeStudent);



module.exports = router;
