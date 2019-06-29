function leftRight(str,c){
    var ch = str.indexOf(c)
    if(ch === str.length-1)
         console.log(str[ch-1])
    else if(ch === 0)
        console.log(str[ch+1])
    else if(ch > 0)
        console.log(str[ch-1] + str[ch + 1])
    else
        console.log('Given letter doesnot exist in the string')
}

leftRight("IBHUBS","p")