var backgroundImage = "racingBackground.jpg";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
// player 1 settings
var carWidth = 120;
var carHeight = 70;
var carImage = "VroomVroom1.png";
var carXValue = 20;
var carYValue = 20;

//player 2 setting
var carWidth2 = 120;
var carHeight2 = 70;
var carImage2 = "VroomVroom2.png";
var carXValue2 = 20;
var carYValue2 = 40;


function add()
{
    backgroundImage_tag = new Image();
    backgroundImage_tag.onload = uploadBackground;
    backgroundImage_tag.src = backgroundImage;

   carImage_tag = new Image();
    carImage_tag.onload = uploadCar1;
    carImage_tag.src = carImage;
    
    carImage_tag2 = new Image();
    carImage_tag.onload = uploadCar2;
    carImage_tag.src = carImage;
}

uploadBackground()
{
    ctx.drawImage(backgroundImage_tag, 0, 0, canvas.width, canvas.height);
}

uploadCar1()
{
    ctx.drawImage(carImage_tag, carXValue, carYValue, carWidth, carHeight);
}

uploadCar2()
{
    ctx.drawImage(carImage_tag2, carXValue2, carYValue2, carWidth2, carHeight2);
}


window.addEventListener("keydown", myKeydown);

function myKeydown(e)
{
    keyPressed = e.keyCode;
    
    if( keyPressed == "38")
    {
        console.log("Up");
        car1Up();
    }

    if( keyPressed == "40")
    {
        console.log("Down");
        car1Down();
    }

    if( keyPressed == "37")
    {
        console.log("Left");
        car1Left();
    }

    if( keyPressed == "39")
    {
        console.log("Right");
        car1Right();
    }

    if( keyPressed == "87")
    {
        console.log("W");
        car2Up();
    }

    if( keyPressed == "65")
    {
        console.log("Left");
        car2Left();
    }

    if( keyPressed == "68")
    {
        console.log("Right");
        car2Right();
    }

    if( keyPressed == "83")
    {
        console.log("Down");
        car2Down();
    }
}