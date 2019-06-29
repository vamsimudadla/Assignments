function frequency(str_array){
    var obj={},i
    for(i=0;i<str_array.length;i++)
    {
        if(obj[str_array[i]])
        {
            obj[str_array[i]] = obj[str_array[i]] + 1
        }
        else
            obj[str_array[i]] = 1
    }
    console.log(obj)
}

frequency(["a","a","b","c","d","e","d"])