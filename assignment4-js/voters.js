function voters(ages)
{
    console.log(ages.filter(filterFunction))
}

function filterFunction(obj)
{
    return obj.age>=18
}

voters([{fullname : 'Sita', age : 16},{fullname : 'Ram', age : 19},{fullname : 'Lakshman', age : 15}])