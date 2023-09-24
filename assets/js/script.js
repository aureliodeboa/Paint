//initial Date
let currentColor = 'black';
let screen = document.querySelector('#tela');
let contex = screen.getContext('2d');  //pega o contexto da tela
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

//events
document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click',colorClickEvent);
});

screen.addEventListener('mousedown',mouseDownEvent);
screen.addEventListener('mousemove',mouseMoveEvent);
screen.addEventListener('mouseup',mouseUpEvent);
document.querySelector('.clear').addEventListener('click',clearScreen)

//funtions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor =color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e){
    canDraw = true;

    mouseX =  e.pageX - screen.offsetLeft;
    mouseY =  e.pageY - screen.offsetTop;
}

function mouseMoveEvent (e){
    if (canDraw){
        //let pointX = e.pageX - screen.offsetLeft;
        //let pointY = e.pageY - screen.offsetTop;
        //console.log(pointX,pointY);

        draw(e.pageX, e.pageY);

    }
}

function mouseUpEvent (){
    canDraw = false;
}

function draw(x,y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //desenhar
    contex.beginPath();
    contex.lineWidth=5;
    contex.lineJoin= "round";
    contex.moveTo(mouseX,mouseY);
    contex.lineTo(pointX, pointY);
    contex.closePath();
    contex.strokeStyle = currentColor;
    contex.stroke();




    mouseX=pointX;
    mouseY=pointY;
        
}

function clearScreen(){
    contex.setTransform(1, 0, 0, 1, 0, 0);
    contex.clearRect(0, 0, contex.canvas.width, contex.canvas.height);
}
