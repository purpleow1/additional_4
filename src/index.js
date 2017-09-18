module.exports = function multiply(firstString, secondString) {
	var answerString;
	var first = [];
	var second = [];
	var answer = [];
	var position;

	for (var i = 0; i < firstString.length; i++) {
		first[firstString.length - i - 1] = parseInt(firstString[i]);
	}
	for (var i = 0; i < secondString.length; i++) {
		second[secondString.length - i - 1] = parseInt(secondString[i]);
	}
	for (var i = 0; i < first.length + second.length; i++) {
		answer[i] = 0;
	}

	for (var i = 0; i < second.length; i++) {
		for (var j = 0; j < first.length; j++) {
			position = i + j;
			answer[position] += (first[j] * second[i]);
			while (answer[position] > 9) {
				answer[position + 1] += (Math.floor(answer[position] / 10));
				answer[position] %= 10;
				position++;
			}
		}
	}

	if (answer[answer.length - 1] == 0) answer.pop();
	answer.reverse();
	answerString = answer.join("");
	return answerString;
}
