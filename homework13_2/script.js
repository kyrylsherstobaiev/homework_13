let inputs = document.querySelectorAll('input[data-text="text"]');
let textarea = document.querySelector('textarea');
let inputArray = [];

//***************************************************************/

inputs.forEach(function (input, index) {
	input.addEventListener('change', () => {
		inputArray[index] = input.value;
		textarea.innerHTML = inputArray.join(',');
	});
	input.addEventListener('focus', () => {
		input.value = '';
	});
});

//***************************************************************/

//function getClearValue() {
//	this.value = '';
//}

//function getValueInput() {
//	switch (this) {
//		case document.querySelector('input[data-text="text"]:first-of-type'):
//			inputArray[0] = this.value;
//			break;
//		case document.querySelector('input[data-text="text"]:nth-of-type(2)'):
//			inputArray[1] = this.value;
//			break;
//		case document.querySelector('input[data-text="text"]:last-of-type'):
//			inputArray[2] = this.value;
//			break;
//	}
//	textarea.innerHTML = inputArray.join(',');
//}

//***************************************************************/

