
var box = document.getElementById('display');

function addtoscreen(val) {
	box.value += val;
	if (val == 'c') {
		box.value = '';
	}
}

function answer() {
	box.value = eval(box.value);
}

function backspace() {
	var num = box.value;
	var newnum = num.substring(0, num.length-1);
	box.value = newnum;
}

function power(y) {
	x = Math.pow(box.value, y);
	box.value = x;
}