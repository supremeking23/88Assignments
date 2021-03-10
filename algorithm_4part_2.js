//1) Analyze an array’s values and return the average of its values.
function printAverage(x) {
	sum = 0;
	// your code here
	let length = x.length;
	for (let i = 0; i < length; i++) {
		// console.log(x[i]);
		sum = sum + x[i];
	}

	return sum / length;
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5

//2) Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddArray() {
	// your code here
	let arr = [];
	for (i = 1; i <= 255; i++) {
		if (i % 2 !== 0) {
			arr.push(i);
		}
	}

	return arr;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

function squareValue(x) {
	// your code here
	// let arr = [];
	for (let i = 0; i < x.length; i++) {
		// arr.push(x[i] * x[i]);
		x[i] = x[i] * x[i];
	}
	return x;
	// return arr;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]
