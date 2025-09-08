const express = require('express')
const router = express.Router();
const control = require('./customer-controller.js');



router.get('/', (req,res)=>{
    // if (req.query.firstname) {
    //     control.getAllCustomers(req.query.firstname,res)
    // }
    if (req.query.gender) {
        control.getAllCustomersByGender(req.query.gender,res)
    }
    if (req.query.age) {
        control.getAllCustomersByAge(req.query.age,res)
    }
    if (req.query.dateS && req.query.dateE) {
        control.getAllCustomersByDateCreated(req.query.dateS, req.query.dateE,res)
    }

    return control.getAllCustomers(req,res);
    
}
);




module.exports = router;

