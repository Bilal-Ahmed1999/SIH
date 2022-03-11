const express = require('express');
const app = express();
const path = require('path');
const Port = process.env.PORT || 8000;
// Paths
require('../Databse/db/database');
const User = require('../Databse/model/user');

const UserRoute = require('../Route/User');
const CartRoute = require('../Route/Cart');
const ShopRoute = require('../Route/Shop');
const ProductRoute = require('../Route/Product');


app.use(express.json());

app.use("/Api/User",UserRoute);
app.use("/Api/Cart",CartRoute);
app.use("/Api/Shop",ShopRoute);
app.use("/Api/Product",ProductRoute);

app.listen(Port,(req,res)=>{
    console.log(`Listening at port ${Port}`);
})
