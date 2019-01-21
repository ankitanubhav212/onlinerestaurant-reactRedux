const Restaurant = require('./models/restaurants')
const fakeDbData = require('./db.json');
class FakeDB {
    constructor() {
        this.restaurants = fakeDbData.restaurants;
    }

    async cleanDb() {
        await Restaurant.remove({});
      }

    pushDataToDb() {
        this.restaurants.forEach((restaurant) => {
            const newRestaurants = new Restaurant(restaurant);
            newRestaurants.save();
        });
    }

    async seedDb() {
        await this.cleanDb();
        this.pushDataToDb();
      }
    }
    
    module.exports = FakeDB;