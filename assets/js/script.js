var COLOURS = [
	'#FFF0F5',
	'#F0FFF0',
	'#F0F8FF',
	'#FFFACD',
	'#E0FFFF',
	'#F5FFFA',
	'#FFF5EE',
	'#FFE4C4',
	'#FFFFE0',
	'#FFDAB9',
	'#FAFAD2',
	'#87CEEB',
];
var radius = 0;
var randomColor = 0;

function colourChange() {
	randomColor = parseInt( 0 + (COLOURS.length - 0) * Math.random(), 10 ) ;
}

colourChange();
document.documentElement.style.setProperty('--main-bg-color', COLOURS[ randomColor % COLOURS.length ]);
colourChange();

const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
const navItem1 = menu.querySelector('.nav-item1');
const navItem2 = menu.querySelector('.nav-item2');
const navItem3 = menu.querySelector('.nav-item3');
const navItem4 = menu.querySelector('.nav-item4');
const navItem5 = menu.querySelector('.nav-item5');
btn.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem1.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem2.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem3.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem4.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});
navItem5.addEventListener('click', evt => {
	menu.classList.toggle('active');
	colourChange();
});

Sketch.create({

	container: document.getElementById( 'background-content' ),
	autoclear: false,
	retina: 'auto',

	update: function() {
		radius = 200;
	},

	click: () => colourChange(),

	touchmove: function() {

		for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

			touch = this.touches[i];

			this.lineCap = 'round';
			this.lineJoin = 'round';
			this.fillStyle = this.strokeStyle = COLOURS[ randomColor % COLOURS.length ];
			this.lineWidth = radius;

			this.beginPath();
			this.moveTo( touch.ox, touch.oy );
			this.lineTo( touch.x, touch.y );
			this.stroke();
		}
	},

	touchend: () => colourChange()
});

$(document).ready(function($) {
	"use strict";

	// Element fade in animation

	$(".animate").each(function(e) {
		var $this = $(this);
		setTimeout(function(){
			$this.addClass("idle");
		}, e * 100);
	});
});