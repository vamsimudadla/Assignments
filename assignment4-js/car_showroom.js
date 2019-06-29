var show_room = {
    cars : [{color : 'red', speed : '300kmph', model : 'ferrari', fuel_type : 'gas' },
            {color : 'black', speed : '280kmph', model : 'audi', fuel_type : 'petrol'},
            {color : 'white', speed : '250kmph', model : 'GTR', fuel_type : 'diesel' }],
           
    addToShowRoom : function (car){
                    show_room.cars.push(car)
                    },
                    
    removeFromShowRoom :function(car_model){
                            for(let i=0;i<show_room.cars.length;i++)
                            {
                                if(show_room.cars[i].model === car_model)
                                {
                                    show_room.cars.splice(i,1)
                                    break
                                }
                            }
                        }
}


var person = {
                firstName : "Vamsi",
                lastName : "Mudadla",
                cars_wishlist : [] ,
                owned_cars : [] ,
                addToWishlist : function(car){    
                                                var c=0
                                                 for(let i=0;i<person.cars_wishlist.length;i++)
                                                 {
                                                     if(person.cars_wishlist[i].model === car.model)
                                                     {
                                                         c++
                                                         console.log("your car is already in your wishlist")
                                                         break
                                                     }
                                                 }
                                                 if(c === 0)
                                                    person.cars_wishlist.push(car)
                                             },
                buyCar : function(new_car,show_room){
                                            var c=0
                                            for(let i=0;i<show_room.cars.length;i++)
                                            {
                                                if(show_room.cars[i].model === new_car.model)
                                                {
                                                    c++
                                                    break
                                                }
                                            }
                                            if(c === 1)
                                            {
                                             person.owned_cars.push(new_car)
                                             show_room.removeFromShowRoom(new_car.model)
                                            }
                                            else
                                                console.log('Desired car is not available')
                                        }
        }

person.addToWishlist({color : 'white', speed : '250kmph', model : 'GTR', fuel_type : 'diesel' })
person.buyCar({color : 'white', speed : '250kmph', model : 'GTR', fuel_type : 'diesel'},show_room)
show_room.addToShowRoom({color : 'white', speed : '250kmph', model : 'GTR', fuel_type : 'diesel'})

console.log("show room cars")
console.log(show_room.cars )
console.log("wishList")
console.log(person.cars_wishlist)
console.log("owned cars")
console.log(person.owned_cars)
