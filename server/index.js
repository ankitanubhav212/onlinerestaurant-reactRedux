let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const FakeDb = require('./fakeDb');

let app = express();

const restaurantRoutes = require('./routes/restaurants');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/restaurants').then(() => {
    const fakeDb =new FakeDb();
    fakeDb.seedDb();
}).catch(err => {
    process.exit();
});;

var db = mongoose.connection;

var port = process.env.PORT || 8080;

app.use('/api/restaurants',restaurantRoutes);

app.listen(port);