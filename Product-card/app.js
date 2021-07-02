
const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const shoeBg = document.querySelector('.shoeBackground');

//intial color 
let prevColor = "blue";


sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    let primary = this.getAttribute('primary');//get hashcode color by user click
    let color = this.getAttribute('color');//get color name by user click
    let shoe = document.querySelector(`.shoe[color="${color}"]`); //get the exact shoe color which matches the user color
    let gradient = document.querySelector(`.gradient[color="${color}"]`); //get gradient first color...
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);//get gradient secondto hide the black color intial
    

   
    colors.forEach(c => c.classList.remove('active')); // active the color 
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary); //changing the primary color 
    
    shoes.forEach(s => s.classList.remove('show')); // display the shoe
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor =color;
}

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        console.log(shoeHeight);
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);