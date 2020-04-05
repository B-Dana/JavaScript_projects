function pet_function() {
    var pet_output;
    var pets = document.getElementById("pet").value;
    var pet_string = " is a great pet to have!";
    switch (pets) {
        case "dog":
            pet_output = "dog" + pet_string;
        break;
        case "cat":
            pet_output = "cat"+pet_string;
        break;
        case "hamster":
            pet_output = "hamster"+pet_string;
        break;
        case "parrot":
            pet_output = "parrot"+pet_string;
        break;
        case "turtle":
            pet_output = "turtle"+pet_string;
        break;
        default:
            pet_output = "Please enter the pet exactly as written in the above list";
    }
    document.getElementById("output").innerHTML=pet_output;
}


function change_function() {
        var A = document.getElementsByClassName("click");
        A[0].innerHTML = "This text has been changed";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,500,0)
grd.addColorStop(0, "red");
grd.addColorStop(0.25, "magenta");
grd.addColorStop(0.5, "blue");
grd.addColorStop(0.75, "green");
grd.addColorStop(1, "yellow");
ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);

ctx.font = "30px Arial";
ctx.fillText("Hello World!", 50, 50);


