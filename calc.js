
const display = document.getElementsById("result");

function Display(input)
{
    document.getElementById("result").value += input;
}
function equal()
{
    
    document.getElementById("result").value = eval(result.value);

}
function clearDisplay()
{
  document.getElementById("result").value = "";
}
function back()
{
    document.getElementById("result").value = result.value.slice(0, -1);
 

}