//a = document.getElementById("lang").value;
function iclick() {
//    alert("choose lang")
    a = document.getElementById("lang").value;
//    document.getElementById("result").value=a;
    if(a == "java"){
        document.getElementById("result").value = "you chose "+a;
    }
    else if(a == "angular"){
        document.getElementById("result").value = "you chose "+a;
    }
    else{
        document.getElementById("result").value = "You lang is not available";
    }
}