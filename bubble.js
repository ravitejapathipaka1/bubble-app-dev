let bubble_app = document.querySelector("#bubble_app");
let reset = document.querySelector("#reset");
let shape = bubble_app.getContext("2d");


circular_shape(150, 60, 35, 0, "#fed866");

circular_shape(150, 190, 35, 0, "#2a79e4");

circular_shape(150, 320, 35, 0, "#cc0101");

circular_shape(150, 450, 35, 0, "#6ba84e");

function circular_shape(x, y, radius, startAngle, color) {
    shape.beginPath();
    shape.lineWidth = 2.5;
    shape.arc(x, y, radius, startAngle, 2 * Math.PI, false);
    shape.fillStyle = color;
    shape.fill();
    shape.stroke();
}


const a = 125;
const b = 255;
const c = 385;


trinagle_shape(800, 64, 850, 24, 102, 61);

trinagle_shape(800, 64 + a, 850, 24 + a, 102 + a, 61 + a);

trinagle_shape(800, 64 + b, 850, 24 + b, 102 + b, 61 + b);

trinagle_shape(800, 64 + c, 850, 24 + c, 102 + c, 61 + c);

function trinagle_shape(sx, sy, ex, eyt, eyb, l) {

    shape.beginPath();
    shape.moveTo(sx, sy);
    shape.lineTo(ex, eyt);
    shape.lineTo(ex, eyb);
    shape.fillStyle = "black";
    shape.fill();

    shape.beginPath();
    shape.lineWidth = 20;
    shape.moveTo(ex, l);
    shape.lineTo(ex + 140, l);
    shape.stroke();
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;


    if (x > 110 && x < 190 && y > 28 && y < 95) {
        bubble1();
    } else if (x > 110 && x < 190 && y > 151 && y < 228) {
        bubble2();
    } else if (x > 110 && x < 190 && y > 289 && y < 351) {
        bubble3();
    } else if (x > 110 && x < 190 && y > 409 && y < 488) {
        bubble4();
    }
}

bubble_app.addEventListener("mousedown", function(event) {
    getMousePosition(bubble_app, event);
});

let move1 = 0;
let move2 = 0;
let move3 = 0;
let move4 = 0;

const motion_speed = 3;

function bubble1() {
    shape.fillStyle = "#fff";
    shape.fillRect(186, 20, 830, 85);

    trinagle_shape(800 - move1, 64, 850 - move1, 24, 102, 61);

    let frame = requestAnimationFrame(bubble1);
    if (move1 > 613) {
        cancelAnimationFrame(frame);
        circular_shape(150, 60, 35, 0, "#989899");
        return;
    }
    move1 += motion_speed;
}

// 2nd arrow movement
function bubble2() {
    shape.fillStyle = "#fff";
    shape.fillRect(186, 148, 830, 85);

    trinagle_shape(800 - move2, 64 + a, 850 - move2, 24 + a, 102 + a, 61 + a);

    let frame = requestAnimationFrame(bubble2);
    if (move2 > 613) {
        cancelAnimationFrame(frame);
        circular_shape(150, 190, 35, 0, "#989899");
        return;
    }
    move2 += motion_speed;
}

// 3rd arrow movement
function bubble3() {
    shape.fillStyle = "#fff";
    shape.fillRect(186, 278, 830, 95);

    trinagle_shape(800 - move3, 64 + b, 850 - move3, 24 + b, 102 + b, 61 + b);

    let frame = requestAnimationFrame(bubble3);
    if (move3 > 613) {
        cancelAnimationFrame(frame);
        circular_shape(150, 320, 35, 0, "#989899");
        return;
    }
    move3 += motion_speed;
}

// 4th arrow movement
function bubble4() {
    shape.fillStyle = "#fff";
    shape.fillRect(186, 406, 830, 95);

    trinagle_shape(800 - move4, 64 + c, 850 - move4, 24 + c, 102 + c, 61 + c);

    let frame = requestAnimationFrame(bubble4);
    if (move4 > 613) {
        cancelAnimationFrame(frame);
        circular_shape(150, 450, 35, 0, "#989899");
        return;
    }
    move4 += motion_speed;
}

reset.onclick = function() {
    location.reload();
};