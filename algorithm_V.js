//1.Given an array and a value Y, count and print the number of array values greater than Y.
function greaterThanYFunction(array, y) {
	let greaterThanY = [];

	for (let i = 0; i < array.length; i++) {
		if (y < array[i]) {
			//ex is 3 greater than 10.. push it
			greaterThanY.push(array[i]);
		}
	}
	console.log(`count ${greaterThanY.length}`);
	return greaterThanY;
}

console.log(greaterThanYFunction([1, 2, 5, 10, 15], 3));

//  2. Given an array, print the max, min and average values for that array.
function printmaxMinAverage(array) {
	//average
	let sum = 0;
	let length = array.length;
	for (let i = 0; i < length; i++) {
		sum = sum + array[i];
	}
	console.log(`average : ${sum / length}`);

	//max
	let max = 0;
	for (let i = 0; i < length; i++) {
		if (max > array[i]) {
		} else {
			max = array[i];
		}
	}
	console.log(`max : ${max}`);

	//min
	let min = 0;
	for (let i = 0; i < length; i++) {
		if (min < array[i]) {
		} else {
			min = array[i];
		}
	}
	console.log(`min : ${min}`);
}
printmaxMinAverage([1, 2, 5, 10, 15, 6, -1]);

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegatives(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			newArray.push("Dojo");
		} else {
			newArray.push(array[i]);
		}
	}

	return newArray;
}

console.log(replaceNegatives([1, 2, -3, -5, 5]));

//4, Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(array, start, end) {
	// let itemsTobeRemoved = [];
	let newArray = [];
	//loop
	for (let i = 0; i < start; i++) {
		newArray.push(array[i]);
	}
	for (let i = end + 1; i < array.length; i++) {
		newArray.push(array[i]);
	}
	array = newArray;
	return array;
}

// removeVals([20,30,40,50,60,70],2,4)
console.log(removeVals([20, 30, 40, 50, 60, 70], 2, 4));
//return [20,30,70].
