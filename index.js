const express = require('express');
const app = express();
app.use(express.json());


const customerRoutes = require('./src/customers/customer-routes.js')
const productRoutes = require('./src/products/product-routes.js')
const orderRoutes = require('./src/orders/orders-routes.js')

app.use('/customer', customerRoutes)
app.use('/product', productRoutes)
app.use('/order', orderRoutes)

// app.get('/students',(req,res)=>{
//     let result = users;
//     if(req.query.year){
//         result = result.filter((user)=>user.course == req.query.year)
//     }

//     res.send(result);

// })


app.listen(3000, ()=>{
    console.log('server started at http://localhost:3000')
})

