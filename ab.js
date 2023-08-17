const title = document.getElementById("title");
const lic = document.getElementById("list-container");

function addTask(){
       if(title.value === ''){
        alert("please enter your task ....");
       }
       else{
        let li = document.createElement("li");
        li.innerHTML = title.value;
        lic.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       }
       title.value = "";
}

lic.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");

    }
    if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();
    }
});