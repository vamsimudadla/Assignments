function grades(details){
    
    var new_obj={}, i, grades_obj={Distinction : 0,A_grade : 0,B_grade : 0,C_grade : 0,Fail : 0}
    
    for(i=0;i<details.length;i++)
    {
        
        if(new_obj[details[i].id]){}
        
        else{
            
            new_obj[details[i].id] = details[i].id
            
            if(details[i].gpa >= 8)
                grades_obj.Distinction = grades_obj.Distinction + 1
            
            else if(details[i].gpa >= 7 && details[i].gpa < 8)
                grades_obj.A_grade = grades_obj.A_grade + 1
            
            else if(details[i].gpa >= 6 && details[i].gpa < 7)
                grades_obj.B_grade = grades_obj.B_grade + 1
            
            else if(details[i].gpa >= 4 && details[i].gpa < 6)
                grades_obj.C_grade = grades_obj.C_grade + 1

            else
                grades_obj.Fail = grades_obj.Fail + 1
        }
    }
    console.log(grades_obj)
}

grades([{"name" : "John", "id" : 1, "gpa" : 7.8},{"name" : "Rick", "id" : 1, "gpa" : 3.9},{"name" : "Lisa", "id" : 1, "gpa" : 8.9},{"name" : "John", "id" : 2, "gpa" : 8.9}])