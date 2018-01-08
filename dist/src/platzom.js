'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2); // Permite cortar caracteres
	}

	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	var length = translation.length;
	if (translation.length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length2 = str.length;
		var translation2 = '';
		var capitalize = true;

		for (var i = 0; i < length2; i++) {
			var char = str.charAt(i);
			translation2 += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}

		return translation2;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}