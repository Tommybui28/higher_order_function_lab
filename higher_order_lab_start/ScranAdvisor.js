const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.numberOfRestaurants = function(){
    return this.restaurants.length;
}
ScranAdvisor.prototype.findRestaurantByName = function(name){
    return this.restaurants.find((restaurant) => restaurant.name === name)
}


ScranAdvisor.prototype.findRestaurantNames = function(){
    return this.restaurants.map((restaurant) => restaurant.name)
}

ScranAdvisor.prototype.findRestaurantsFromTown = function(town){
    return this.restaurants.filter(restaurant => restaurant.location.town === town)
}

module.exports = ScranAdvisor;