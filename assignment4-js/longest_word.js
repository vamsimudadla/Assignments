function longestWord(str){
    var new_str=str.split(" ") , i ,len=0, index
    for(i=0;i<new_str.length;i++)
    {
        if(new_str[i].length > len)
        {
            len = new_str[i].length
            index = i
        }
    }
    console.log(new_str[index])

}

longestWord("You progress the nation follows")