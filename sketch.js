let button, body;
let start = false;



var x;
var i;

var fadeInterval = 1.6;
var symbolSize = 15;
var streams = [];


function mousePressed() {
	console.log('a')
	start = true;
}

function setup() {
	// make canvas full screen
	createCanvas(window.innerWidth, window.innerHeight);
 background(0);
// createButton();


 var x = 0;

 for (var i = 0; i <= width / symbolSize; i++) {
	 var stream = new Stream();
	 stream.generateSymbols( x,random(-1000, 0));
	 streams.push(stream);
	 x += symbolSize
 }

 textFont ('Consolas');
 textSize(symbolSize);

 //  for (var i = 0; i < 100; i++) {
	// createCheckbox(false).style("display", "inline");
 // }
 // body = select('body');

 // button.position(19, 19);
 // button.mousePressed(changeBG);
}



function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();
	// ellipse(mouseX, mouseY, 100);

background(0, 150);
if (start) {
	streams.forEach(function(stream) {
		stream.render();
	});
}

}

function Symbol(x, y, speed, first, opacity) {
	this.x = x;
	this.y = y;
	this.value;

	this.speed = speed;
	this.first = first;
	this.opacity = opacity;

	this.switchInterval = round( random(2, 25));

	this.setToRandomSymbol = function() {
		var charType = round(random(0,5));
		if (frameCount % this.switchInterval == 0) {
			if (charType > 1) {}
			this.value = String.fromCharCode(
				0x30A0 + round(random(0, 96))
			);
	 }else {
		 this.value = round(random(0,9));
	 	}
	 }
	 this.rain = function() {
		 this.y = (this.y >= height) ? 0: this.y += this.speed;
	 }
	}




function Stream() {
	this.symbols = [];
	this.totalSymbols = round(random(5, 35));
	this.speed = random(5, 22);

	this.generateSymbols = function(x, y) {
		var opacity = 255;
		var first = round(random(0, 4)) == 1;
		for (var i =0; i <= this.totalSymbols; i++) {
			let symbol = new Symbol(x, y, this.speed, first, opacity);
			symbol.setToRandomSymbol()
			this.symbols.push(symbol);
			opacity -= (255 / this.totalSymbols) / fadeInterval;
			y -= symbolSize;
			first = false;
	}
}

this.render = function() {
	this.symbols.forEach(function(symbol) {
	if (symbol.first) {
		fill(180, 255, 180, symbol.opacity);
	} else{
		fill(0, 255, 70, symbol.opacity);
	}
		text(symbol.value, symbol.x, symbol.y);
		symbol.rain();
		symbol.setToRandomSymbol();
		});
	}
}


// function changeBG() {
// 	body.style("background-image", images[nextimage]);
// 	body.style("background-size", "cover");
// 	// document.body.style.backgroundImage = images[nextimage];
// 	// document.body.style.backgroundSize = "cover";
// 	// let val = random(255);
// 	// background(val);
// 	nextimage += 1;
// 	if (nextimage > images.length-1) nextimage = 0;
// }

// for (var i = 0; i < 100; i++) {
//   var x = document.createElement("INPUT");
//   x.setAttribute("type", "checkbox");
//   document.body.appendChild(x);
// }
