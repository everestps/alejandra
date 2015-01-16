var fish = document.getElementById("fish");
var food = document.getElementById("food");

//Where the fish first starts 
var currentFishSpot = 300;
var isMoveRight = true;

//When the fish tank is clicked it triggers the food to start falling
var feedMe = document.getElementById("myTank");
feedMe.onclick = function(){
    window.requestAnimationFrame(fishFood);
};
var foodTop = parseInt(food.style.top,10);
var foodBottom = false;




//This function makes the fish move in the tank
function moveFish()
{
    if(currentFishSpot === 1150){
        isMoveRight = false;
        fish.classList.remove("flipped");
    }
    if(currentFishSpot === 300){
        isMoveRight = true;
        fish.classList.add("flipped");
    }
    if(isMoveRight){
        currentFishSpot += 0.5;
    }
    else{
        currentFishSpot -= 0.5;
    }
    fish.style.left = currentFishSpot + "px";
    window.requestAnimationFrame(moveFish);
}
window.requestAnimationFrame(moveFish);


//This function checks when the food is at the bottom of the tank so that it stops moving at that point
function fishFood()
{
    food.style.visibility = "visible";
    if(!foodBottom){
        foodTop += 1;    
        food.style.top = foodTop + "px";
    }
    if(500 === foodTop){ //if food is at the bottom or not
        foodBottom = true;
    }
    window.requestAnimationFrame(fishFood);
}
