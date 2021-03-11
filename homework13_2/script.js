let inputs = document.querySelectorAll('input[data-text="text"]');
let textarea = document.querySelector('textarea');
let inputArray = [];

inputs.forEach(function (input) {
	input.addEventListener('change', getValueInput)
	input.addEventListener('focus', getClearValue)
});

function getClearValue() {
	this.value = '';
}

function getValueInput() {
	inputArray.push(this.value);
	textarea.innerHTML = inputArray.join(',');
}

console.dir(inputArray);
