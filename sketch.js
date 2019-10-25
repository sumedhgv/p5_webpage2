let button, body;

var images = new Array("url('https://i.imgur.com/R2yE6LG.png')", "url('https://i.imgur.com/7OF5dXU.jpg')");
var nextimage = 0;

var x;
var i;


function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);
 //background(0);
  for (var i = 0; i < 100; i++) {
	createCheckbox(false).style("display", "inline");
 }
 body = select('body');
 button = createButton('click me');
 button.position(19, 19);
 button.mousePressed(changeBG);
}



function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();
	ellipse(mouseX, mouseY, 100);
}

function changeBG() {
	body.style("background-image", images[nextimage]);
	body.style("background-size", "cover");
	// document.body.style.backgroundImage = images[nextimage];
	// document.body.style.backgroundSize = "cover";
	// let val = random(255);
	// background(val);
	nextimage += 1;
	if (nextimage > images.length-1) nextimage = 0;
}

// for (var i = 0; i < 100; i++) {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "checkbox");
//   document.body.appendChild(x);
// }
