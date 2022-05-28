const pad = document.getElementById('pad');
const pixCol = document.getElementById('pixelColumn');
const sldr = document.getElementById('slider');
const size = document.getElementById('size');
const pix = document.createElement('div');
pix.classList.add('pixel');

updateSize();

function updateSize(){
    let dimension = 576 / sldr.value;
    pixCol.style.width = `${dimension}px`;
    pix.style.width = `${dimension}px`;
    pix.style.height = `${dimension}px`;
    size.textContent = `${sldr.value} x ${sldr.value}`;
    drawPixels();
}

function colorize(){
    this.style.backgroundcolor = 'black';
}

function drawPixels(){
    while(pad.firstChild){
        pad.removeChild(pad.firstChild);
    }
    while(pixCol.firstChild){
        pixCol.removeChild(pixCol.firstChild);
    }
    for (let i = 0; i < sldr.value; i++){
        let pixClone = pix.cloneNode(true);
        pixCol.appendChild(pixClone);
    }
    for (let i = 0; i < sldr.value; i++){
        let pixColClone = pixCol.cloneNode(true);
        pad.appendChild(pixColClone);
    }
    let clones = document.querySelectorAll('.pixel');
    for (let clone of clones){
        clone.addEventListener('click', colorize);
    }
}

sldr.addEventListener('input', updateSize);