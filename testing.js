// function looping(x, y) {
// 	for (var i = 0; i < x; i++) {
// 		for (var j = 0; j < y; j++) {
// 			console.log(i * j);
// 		}
// 	}
// 	return x * y;
// }
// z = looping(3, 5);
// console.log(z);

// function a(x) {
// 	z = [];
// 	z.push(x);
// 	z.pop();
// 	z.push(x);
// 	z.push(x);
// 	return z;
// }
// y = a(2);
// // y.push(5);
// console.log(y);

// function a(x, y) {
// 	z = [];
// 	z.push(x);
// 	z.push(y);
// 	z.push(5);
// 	console.log(z);
// 	return z;
// }
// b = a(2, 2);
// console.log(b);
// console.log(a(6, 8));

// function a(x) {
// 	if (x[0] < x[1]) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// b = a([2, 3, 4, 5]);
// console.log(b);

// function a(x) {
// 	for (var i = 0; i < x.length; i++) {
// 		if (x[i] > 0) {
// 			x[i] = "Coding";
// 		}
// 	}
// 	return x;
// }
// console.log(a([1, 2, 3, 4]));

// function a(x) {
// 	for (var i = 0; i < x.length; i++) {
// 		if (x[i] > 5) {
// 			x[i] = "Coding";
// 		} else if (x[i] < 0) {
// 			x[i] = "Dojo";
// 		}
// 	}
// 	return x;
// }
// console.log(a([5, 7, -1, 4]));

// function a(x) {
// 	if (x[0] > x[1]) {
// 		return x[1];
// 	}
// 	return 10;
// }
// b = a([5, 10]);
// console.log(b);

// var msg1 = "hello";
// var msg2 = "world";
// for (var num1 = 1; num1 <= msg1.length; num1++) {
// 	for (var num2 = 1; num2 <= msg2.length; num2++) {
// 		if (msg1.length == 4) {
// 			console.log(msg1 + "" + msg2);
// 		}
// 	}

// 	if (num1 != 4) {
// 		console.log(msg1.length + msg2.length);
// 	}
// }

// var array = [5, 3, 4, 1];
// for (var x = 0; x < array.length; x++) {
// 	for (y = array.length - 1; y >= x; y--) {
// 		if (array[x] > array[y]) {
// 			var temp = array[y];
// 			array[y] = array[x];
// 			array[x] = temp;
// 		}
// 	}
// }

// console.log(array);

// function secondToLast(arr) {
// 	return arr[arr.length - 2];
// }

// console.log(secondToLast([42, true, 4, "kate", 7]));

// var x = [];
// x[0] = "Hello";
// x[1] = "World";
// x[2] = 100;

// console.log(x.length + "" + x[0]);

// var x = 10;
// function abc(x) {
// 	console.log(x);
// 	return x * 10;
// }

// abc(x);
// console.log(x);

// var x = 10,
// 	y = 20;
// function abc(x, y) {
// 	x = x + 10;
// 	y = y + 10;
// 	console.log(x);
// 	console.log(y);
// 	return x * 10;
// }

// var z = abc(x, y);
// console.log(x);
// console.log(y);
// console.log(z);

// var x = 10,
// 	y = 20;
// function abc(x, y) {
// 	x = x + 10;
// 	y = y + 10;
// 	console.log(x);
// 	console.log(y);
// 	return x * 10;
// }

// var z = abc(x, y) + abc(y, x);

// console.log(z);

// function abc(number) {
// 	var arr = [];
// 	for (var i = 0; i < number; i++) {
// 		arr.push(0);
// 	}

// 	return arr;
// }

// var z = abc(5);

// console.log(z);

// function abc(number) {
// 	var sum = 0;
// 	for (var i = 0; i <= number; i++) {
// 		sum = sum + i;
// 	}
// 	console.log(sum);
// 	return sum + 10;
// }

// var z = abc(2) + abc(3);

// console.log(z);

// function looping(x, y) {
// 	for (var i = 0; i < x; i++) {
// 		for (var j = 0; j < y; j++) {
// 			console.log(i * j);
// 		}
// 	}

// 	return x * y;
// }

// var z = looping(2, 3);

// console.log(z);

// function minMaxAvg(arr) {
// 	var arrnew = [];
// 	var length = arr.length;
// 	var sum = 0;
// 	var min = 0;
// 	var max = 0;
// 	var average = 0;

// 	for (var i = 0; i < length; i++) {
// 		sum = sum + arr[i];
// 	}

// 	average = sum / length;

// 	for (var i = 0; i < length; i++) {
// 		if (max > arr[i]) {
// 		} else {
// 			max = arr[i];
// 		}
// 	}

// 	for (var i = 0; i < length; i++) {
// 		if (min < arr[i]) {
// 		} else {
// 			min = arr[i];
// 		}
// 	}

// 	arrnew.push(max, min, average);

// 	return arrnew;
// }

// console.log(minMaxAvg([1, 5, 10, -2]));

// function swap(arr) {
// 	var first = arr[0];
// 	var last = arr[arr.length - 1];

// 	arr[arr.length - 1] = first;
// 	arr[0] = last;
// 	return arr;
// }

// console.log(swap([1, 5, 10, -2]));

// var msg = "codingdojo";

// for (var x = -1; x < msg.length - 4; x++) {
// 	if (msg.length == 2) {
// 		for (var i = 3; i < 3; i++) {
// 			console.log(i);
// 		}
// 	} else {
// 		for (var i = msg.length; i > msg.length - 3; i--) {
// 			console.log(i);
// 		}
// 	}
// }

var string = "ivan christian jay";
var arrNew = [];
var indexWithSpace = [];
for (var i = 0; i < string.length; i++) {
	// console.log(string[i]);
	arrNew.push(string[i]);
}

// get the index of spaces
for (var i = 0; i < arrNew.length; i++) {
	// console.log(string[i]);
	if (arrNew[i] == " ") {
		indexWithSpace.push(i);
	}
}
