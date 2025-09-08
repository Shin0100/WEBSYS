const express = require('express')
const router = express.Router();
const control = require('./orders-controller.js');



router.get('/', (req,res)=>{
    if (req.query.status) {
        control.getAllCustomersByStatus(req.query.status,res)
    }
 
    if (req.query.min || req.query.max) {
        control.getAllCustomersByTotal(req.query.min,req.query.max,res)
    }


    return control.getAllCustomers(req,res);
    
}
);




module.exports = router;

