document.getElementById("btn-inc").addEventListener("click", increase);
document.getElementById("btn-dec").addEventListener("click", decrease);
let x = 0;
function increase(){
        document.getElementById("count").value = x;
        x++;
        document.getElementById("count").innerHTML = x; 
}

function decrease(){
    document.getElementById("count").value = x;
    x--;
    document.getElementById("count").innerHTML = x;
}