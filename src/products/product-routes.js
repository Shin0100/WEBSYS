const express = require('express')
const router = express.Router();
const control = require('./product-controller.js');




router.get('/', (req,res)=>{
    // if (req.query.firstname) {
    //     control.getAllCustomers(req.query.firstname,res)
    // }
    
    if (req.query.name) {
        control.getAllProductsByName(req.query.name,res)
    }
    if (req.query.stockmin || req.query.stockmax ) {
        control.getAllProductsByStock(req.query.stockmin, req.query.stockmax,res)
    }
    if (req.query.min || req.query.max) {
        control.getAllProductsByPrice(req.query.min,req.query.max,res)
    }
    if (req.query.descrip) {
        control.getAllProductsByDescrip(req.query.descrip,res)
    }

    return control.getAll(req,res);
}
);




module.exports = router;

