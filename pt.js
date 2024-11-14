// Aswin-Koroth
// 6/1/2022

const pixel = document.querySelectorAll(".pixel");
const container = document.querySelector('.con');
const color = document.getElementById('color');
const era = document.getElementById("eraser");
const pnt = document.getElementById("paint");

var eraser = false;


container.addEventListener('mousedown',pt)
document.addEventListener('mouseup',pt)

function toggle(i)
{
    if(i==1){
    eraser = true;
    select();
    }
    else{
    eraser = false;
    select();
    }
}

function select()
{era.classList.toggle("selected")
pnt.classList.toggle("selected")}

function pt(e)
{
    console.log(e.type)
    if(e.type=='mousedown'){
    pixel.forEach(function(pix){
        pix.addEventListener('mouseenter', paint);
        pix.addEventListener('click', paint);
    })
    }
    else{
    pixel.forEach(function(pix){
        pix.removeEventListener('mouseenter', paint);
    })
    console.log('end');return}
}

function paint(e)
 {
    if(eraser == false){
        e.target.style.background = color.value
        console.log("pix");
    }
    else{
        e.target.style.background = "#f2f2f2";
    }

 }

 function fill()
 {
    pixel.forEach(function(pix){
        pix.style.background = color.value;
    })
 }



