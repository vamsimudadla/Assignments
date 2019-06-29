function arrayMap(numbers){
    console.log(numbers.map(mapFunction))
}

function mapFunction(num)
{
    return num*2
}

arrayMap([1,2,3,4])