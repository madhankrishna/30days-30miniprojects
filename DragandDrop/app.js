const fill = document.querySelector('.fill');
const boxes = document.querySelectorAll('.boxes');

fill.addEventListener('dragstart',dragstart);
fill.addEventListener('dragend' ,dragend);


boxes.forEach((box)=>{
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);

    
})
// functions
function dragstart(e){
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide');
}, 0);

}


function dragend(e){
    e.target.classList.remove('hide');

}

function dragOver(e){
    e.preventDefault();
    e.target.classList.add('hovered');

}
function dragEnter(e){
    e.preventDefault();
    e.target.classList.add('hovered');
}
function dragLeave(e){
    e.target.classList.remove('hovered');

}
function dragDrop(e){
    e.target.classList.remove('hovered');
    e.target.append(fill);
}

