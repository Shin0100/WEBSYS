const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
 res.send('hi')

})



module.exports = router;

// controller
//controlelr
// const control = require('./')
// router.get('/', studentController.getStudents);

// function getStudents(){

// }
// function getStudentsId(){

// }
// module.exports = {
//     getStudents,
//     getStudentsId

// };