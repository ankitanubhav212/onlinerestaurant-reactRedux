const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: {type:String},
    cuisines: {type:String},
    averageCost: {type:Number},
    currency:  {type:String},
    hasTableBooking: {type:String},
    hasOnlineDelivery:  {type:String},
    aggregateRating:  {type:Number},
    ratingColor:  {type:String},
    ratingText:  {type:String},
    votes:  {type:Number},
    countryCode:  {type:Number},
    city:  {type:String},
    address: {type:String},
    locality: {type:String},
    localityVerbose:  {type:String},
    longitude:  {type:Number},
    latitude:  {type:Number}
});

module.exports = mongoose.model('Restaurant', restaurantSchema );