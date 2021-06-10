function Switch(){
    var a = document.getElementById("day").value;
    switch (parseInt(a)) {
        case 1: 
            document.getElementById("para").innerHTML = "It is Monday";
            break;
        case 2:
            document.getElementById("para").innerHTML = "It is Tuesday";
            break;
        case 3:
            document.getElementById("para").innerHTML = "It is Wed";
            break;
        case 4:
            document.getElementById("para").innerHTML = "It is Thurs";
            break;
        default:
            document.getElementById("para").innerHTML = "Enter a valid day";
            break;
    }
}