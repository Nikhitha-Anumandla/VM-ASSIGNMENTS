function btn(x){
    var a= document.getElementById(x).value;
    document.getElementById("res").value+=a;
}
function result(){
    var a=eval(document.getElementById("res").value);
    document.getElementById("res").value=a;
    
}
function Clear(){
    document.getElementById('res').value=" ";
}
