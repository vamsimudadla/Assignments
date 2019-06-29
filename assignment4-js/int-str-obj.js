
function array(objects_array)
{
    var c1=0,c2=0,c3=0,i
    for(i=0;i<objects_array.length;i++) 
    {
        switch(typeof(objects_array[i]))
        {
            case "number" : c1 = c1 + 1;
                            break;
            case "string" : c2 = c2 + 1
                            break;
            case "object" : c3 = c3 + 1
                            break;
        }
    }
    console.log(c1,c2,c3)
}
        array([1,2,"Ram",{name : 'Sita'}])