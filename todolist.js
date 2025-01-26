const inputText=document.getElementById('inputbox');
const listContent=document.getElementById('listcontent');
function addTask()
{
    if (inputText.value==='')
    {
        alert("Please type your To-Do-List");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        listContent.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value="";
    SaveData();
}
listContent.addEventListener("click",function(e)
{
if (e.target.tagName==="LI")
    {e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName==="SPAN")
    {e.target.parentElement.remove();
        SaveData();
    }
},false);
function SaveData()
{
    localStorage.setItem("data", listContent.innerHTML);
}
function ShowTask()
{
    listContent.innerHTML=localStorage.getItem("data");
}
ShowTask();