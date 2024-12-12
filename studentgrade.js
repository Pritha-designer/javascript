var stuid=354201;
var sname="Preethi";
var m1=96;
var m2=95;
var m3=93;
var m4=91;
var m5=92;
var tot=m1+m2+m3+m4+m5;
var percentage=(tot*100)/500.0;
var grade;
if(percentage<100 && percentage>90)
{
    grade = "A grade";
}
else if(percentage>80 && percentage<90)
{
    grade = "B grade";
}
else if(percentage>70 && percentage<80)
{
    grade = "C grade";
}
else if(percentage>60 && percentage<70)
{
    grade = "D grade";
}
else if(percentage>50 && percentage<60)
{
    grade = "E grade";
}
else
{
    grade = "Fail";
}

document.write("Student Id:   "+stuid+"<br>");
document.write("Student name:  "+sname+"<br>");
document.write("Tamil:   "+m1+"<br>");
document.write("English:   "+m2+"<br>");
document.write("Maths:   "+m3+"<br>");
document.write("Science:   "+m4+"<br>");
document.write("Social:   "+m5+"<br>");
document.write("Total:   "+tot+"<br>");
document.write("Percentage:   "+percentage+"<br>");
document.write("Student Grade is:   "+grade);

