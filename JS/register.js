
function printAge() {
    var height = document.getElementById("myHeight").value;
    var h = (height > 6) ? "your height is too high" : "Your height is ok for test";
    document.getElementById("heightDisplay").innerHTML = h;
}
