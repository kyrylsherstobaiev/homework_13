let main_block = document.querySelector('div[data-wrapper="wrapper"]');

let block = document.querySelector('div[data-name="block"]');

const STEP = 1;

block.addEventListener('click', activateBlock);

function activateBlock(e) {
	e.target.classList.add('active');
}

document.addEventListener('keydown', moveBlock);

function moveBlock(e) {
	let currentActiveBlock = document.querySelector('div[data-name="block"].active');
	currentActiveBlock && keyFunc[e.code] && keyFunc[e.code](currentActiveBlock);
}

function reachedBorder(elem) {
	elem.innerHTML = "<p>**Boom**</p>"
	elem.style.background = "red";
	setTimeout(function () {
		elem.innerHTML = "";
		elem.style.background = "green";
	}, 2500);
}

let keyFunc = {
	ArrowRight: function (block) {
		block.style.left = block.style.left === '' ? STEP + 'px' : parseInt(block.style.left) + STEP + 'px';
		let coord = block.getBoundingClientRect();
		let deff_x_right = main_block.offsetWidth - block.offsetWidth + main_block.offsetLeft;
		if (coord.left >= deff_x_right) {
			block.style.left = (deff_x_right - 30) + 'px';
			reachedBorder(block);
		}
	},
	ArrowLeft: function (block) {
		block.style.left = block.style.left === '' ? -STEP + 'px' : parseInt(block.style.left) - STEP + 'px';
		let coord = block.getBoundingClientRect();
		let deff_x_left = main_block.offsetLeft;
		if (coord.left <= deff_x_left) {
			block.style.left = 20 + 'px';
			reachedBorder(block);
		}
	},
	ArrowUp: function (block) {
		block.style.top = block.style.top === '' ? -STEP + 'px' : parseInt(block.style.top) - STEP + 'px';
		let coord = block.getBoundingClientRect();
		let deff_x_up = main_block.offsetTop;
		if (coord.top <= deff_x_up) {
			block.style.top = 20 + 'px';
			reachedBorder(block);
		}
	},
	ArrowDown: function (block) {
		block.style.top = block.style.top === '' ? STEP + 'px' : parseInt(block.style.top) + STEP + 'px';
		let coord = block.getBoundingClientRect();
		let deff_x_down = main_block.offsetHeight - block.offsetHeight + main_block.offsetTop;
		if (coord.top >= deff_x_down) {
			block.style.top = (deff_x_down - 30) + 'px';
			reachedBorder(block);
		}
	}
}


