function keyValues(obj){
    var key,obj1={}
    for(key in obj)
    {
        obj1[obj[key]] = key
    }
    console.log(obj1)

}

keyValues({1:"one",2:"two"})