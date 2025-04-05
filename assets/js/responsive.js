/*main js for responsiveness*/

function menu(){
    document.getElementById("phone").style.display = "flex";
    document.getElementById("phone").style.animation = "fadeIn .5s"; 
}

function menuclose(){
    document.getElementById("phone").style.display = "none";
    
    document.getElementById("phone").style.animation = "fadeOut 1s"; 
}
