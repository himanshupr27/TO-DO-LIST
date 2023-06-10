const input = document.getElementById("sear");
const lists =document.getElementById("lis");

function addtask(){
    if(input.value === '')
    {
        alert("Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        lists.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    save();
}
lists.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);
function save(){
    localStorage.setItem("memory", lists.innerHTML);
}
function show()
{
    lists.innerHTML=localStorage.getItem("memory");
}
show();