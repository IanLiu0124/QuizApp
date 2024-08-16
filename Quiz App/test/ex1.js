//settimeout executes a function once after specififed amount of time has elapsed.

let animation1 = setTimeout(myFunc, 3000); //after 3 seconds, this function happens

function myFunc()
{
    alert("Hello");
}

clearTimeout(animation1); //this will clear it if it hasn't happened yet.


//setinterval

let animation2 = setInterval(myFunc, 3000) //this function executes repeatly after 3 seconds
clearInterval(animation2) //clears it
let animation3 = setInterval(BackgroundChange, 5000);

function BackgroundChange()
{
    let color = ["red", "green","blue"];
    let random =  Math.floor(Math.random()*4);
    document.body.style.backgroundColor = color[random];
}
let start = document.getElementById("start");
let imageanimation;
start.addEventListener('click', SlideShow);
let stop = document.getElementById("stop");
let i = 0;
stop.addEventListener('click', stopAnimation);
function stopAnimation()
{
    clearInterval(imageanimation)
}
function SlideShow()
{
    imageanimation = setInterval(function()
{
    let img = document.body.querySelector('img');
    imgages = ["./Images/image0.jpg", "./Images/image1.jpg","./Images/image3.jpg","./Images/image4.jpg","./Images/image5.jpg"];
    //let random = Math.floor(Math.random()*2);
    
    img.src=imgages[i];
    i++;
    if(i>=imgages.length)
    {
        i=0;
    }
}
, 700);

}

