function topRatedRestaurant(restaurants) {
    // Write your code here
    if(!Array.isArray(restaurants) || restaurants.length === 0) return "Invalid";
    else {
        let mxRate = restaurants[0].rating;
        let mxName = restaurants[0].name;

        for(let it of restaurants) 
            if(it.rating > mxRate) return it.name.toUpperCase();
        
        return mxName.toUpperCase();
    }
}