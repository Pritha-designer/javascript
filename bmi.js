
function calcBMI()
{
   var weight = parseFloat(document.getElementById("Weight").value);
   var height = parseFloat(document.getElementById("Height").value);
   var bmi = (weight / (height*height)*10000);
   bmi = bmi.toFixed(2);
   
 var category=""
 if (bmi >0 && bmi <=18.50)
    {
         category="Your weight is: Underweight";
    
    }

else if (bmi >18.50 && bmi <=25)
{
 category = "Your weight is: Normal";
  
}
else if (bmi >25 && bmi <=30)
    {
        
        category="Your weight is: Overweight";
    }
else if (bmi>30 && bmi <=40)
{
   category="Your weight is: Obese";
 
}
else
{
 category="Please type correct values"
}
document.getElementById('report').innerHTML= "Your BMI is :&nbsp;&nbsp;"+bmi +"<br>" +category; 
}
