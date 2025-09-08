
const customers = require('./products');

// function getAllCustomers(firstname,res){
//     res.send(customers.filter((cust)=>cust.firstName == firstname))
// }
function getAllProductsByName(firstname,res){ 
const name = firstname.toLowerCase();
    res.send(customers.filter((cust)=> cust.name.toLowerCase().includes(name)
    
    ));
}
function getAllProductsByDescrip(firstname,res){
    const name = firstname.toLowerCase();
    res.send(customers.filter((cust)=> cust.description.toLowerCase().includes(name)
    ));
}
function getAllProductsByPrice(min,max,res){
    const mini = min || 0;
    const maxi = max || Infinity;
    
    res.send(customers.filter((cust)=>cust.price >=mini && cust.price <= maxi))
}
function getAllProductsByStock(min,max,res){
    const mini = min || 0;
    const maxi = max || Infinity;
    res.send(customers.filter((cust)=>cust.stock >= mini && cust.stock <=maxi))
}
function getAll(req,res){
    res.send(customers)

}




module.exports = {
    getAll,
    getAllProductsByStock,
    getAllProductsByPrice,
    getAllProductsByDescrip,
    getAllProductsByName

};