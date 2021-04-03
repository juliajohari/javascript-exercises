function add (...numberInput) {
	let sum = 0;
	for (let i = 0; i < numberInput.length; i++) {
		sum += numberInput[i];
	}//end loop
	return sum;
}//end add

function subtract (...numberInput) {
	let sum = numberInput[0];
	for (let i = 1; i < numberInput.length; i++) {
		sum -= numberInput[i];
	}//end loop
	return sum;
}//end subtract

function sum (numberArray) {
	let sum = 0;
	for (let i = 0; i < numberArray.length; i++) {
		sum += numberArray[i];
	}//end loop
	return sum;
}//end sum

function multiply (numberArray) {
	let sum = numberArray[0];
	for (let i = 1; i < numberArray.length; i++) {
		sum *= numberArray[i];
	}//end loop
	return sum;
}//end multiply

function power(numberInput1, numberInput2) {
	return numberInput1 ** numberInput2;
}//end power

function factorial(numberInput) {
	let result = numberInput;
	if (numberInput === 0) {
		return 1;
	}//end guard clause
	for (let i = 1; i < numberInput -1; i++) {
		result *= numberInput - i;
	}//end loop
	return result;
}//end factorial

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}