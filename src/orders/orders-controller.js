
const customers = require('./orders.js');


function getAllCustomers(req,res){
    res.send(customers)
}
function getAllCustomersByStatus(status,res){
    res.send(customers.filter(cust=>
        cust.status.toLowerCase() == status.toLowerCase()
    ))
}
function getAllCustomersByTotal(min,max,res){
    const mini = min||0;
    const maxi = max||Infinity;
    res.send(customers.filter(cust=>
        cust.totalAmount>=mini && cust.totalAmount<=maxi
       
    ))
}




module.exports = {
    getAllCustomers,
    getAllCustomersByStatus,
    getAllCustomersByTotal


};