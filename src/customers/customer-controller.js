
const customers = require('./customers.js');
const moment = require('moment');

function getAllCustomers(req,res){
    res.send(customers)
}

function getAllCustomersByGender(firstname,res){
    res.send(customers.filter((cust)=>cust.gender.toLowerCase() == firstname.toLowerCase()))
}


function getAllCustomersByAge(age,res){

     const currentYear = new Date().getFullYear();
    const filteredCustomers = customers.filter(cust => {
        const birthYear = new Date(cust.birthday).getFullYear(); 
        return (currentYear - birthYear) == age;  
    });
    

    res.send(filteredCustomers); 
    
}   

function getAllCustomersByDateCreated(start,end,res){
    var starts = start?new Date(start): moment();
    var ends = end?new Date(end): moment();

    res.send(customers.filter(cust=>{
        const created = new Date(cust.createdAt);
        return created>=starts && created<=ends
    }
        
        )) 
   
}
     






module.exports = {
    getAllCustomers,
    getAllCustomersByDateCreated,
    getAllCustomersByGender,
    getAllCustomersByAge

};