//1.Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].

function resetNegatives(array) {
	// let newArray = [];
	// for (let i = 0; i < array.length; i++) {
	// 	if (array[i] < 0) {
	// 		newArray.push(0);
	// 	} else {
	// 		newArray.push(array[i]);
	// 	}
	// }
	// return newArray;
	//method 2
	for (let i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			array[i] = 0;
		}
	}
	return array;
}

console.log(resetNegatives([1, 2, -1, -3]));

// 2. Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].
function moveForward(array) {
	let newArray = [];
	for (let i = 1; i < array.length; i++) {
		newArray.push(array[i]);
	}

	newArray.push(0);

	return newArray;

	// // method 2
	// for (let i = 1; i < array.length; i++) {
	// 	array[i] = array[i];
	// }
	// array.push(0);
	// return array;
}
console.log(moveForward([1, 2, 3]));

//3. Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].
function returnReversed(array) {
	let reverseOrder = [];
	for (var i = array.length - 1; i >= 0; i--) {
		reverseOrder.push(array[i]);
	}

	return reverseOrder;
}

console.log(returnReversed([1, 2, 3]));
console.log(returnReversed([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//4 Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repeatTwice(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		// not so efficient lols
		newArray.push(array[i]);
		newArray.push(array[i]);
	}

	return newArray;
}
console.log(repeatTwice([4, "Ulysses", 42, false]));
console.log(repeatTwice([4, "Ivan", 42 + 2, false]));
