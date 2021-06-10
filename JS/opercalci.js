function getData(){
    a = parseInt(document.getElementById("frst").value);
    b = parseInt(document.getElementById("second").value);
}
function addNums() {
    getData()
    var c = a + b;
    document.getElementById("result").value = "Result:"+c;
}
function subNums() {
    getData()
    var c = a - b;
    document.getElementById("result").value = "Result:"+c;
}
