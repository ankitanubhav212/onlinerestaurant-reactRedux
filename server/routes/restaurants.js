const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurants');


router.get('', (req,res) => {
    const search = req.query.search;
    let sortQuery={};
    if(req.query.sort) {
    const sort = req.query.sort.split('-');
    const sortBy = sort[0];
    const sortOrder = sort[1];
    sortQuery[sortBy]=sortOrder;
    }
    const query = search ? {$or:[{name: new RegExp(search, "i")},{cuisines:new RegExp(search, "i")}]} : {};
    Restaurant.find(query).sort(sortQuery).exec((err,data) => {
        if(data){
            return res.json(data)
        }
    });
})

module.exports = router;
