/* Caesar's cipher 
*/

function caesarCipher(s, k) {
	// Write your code here
	const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
	const stringArray = [...s];
	const newString = [];
	const movement = k % alphabet.length;

	function isUpperCase(string) {
		return /^[A-Z]+$/.test(string);
	}
	function isLetter(string) {
		return /^[A-Za-z]+$/.test(string);
	}
	stringArray.forEach(item => {
		if (!isLetter(item)) {

			newString.push(item);
		} else if (isUpperCase(item)) {
			let index = alphabet.findIndex(letter => item === letter.toUpperCase());

			if (index + movement >= alphabet.length) {

				index = index + movement - alphabet.length;
				newString.push(alphabet[index].toUpperCase());
			} else {
				
				index = index + movement;

				newString.push(alphabet[index].toUpperCase());
			}
		} else {
			let index = alphabet.findIndex(letter => item === letter);
			if (index + movement >= alphabet.length) {

				index = index + movement - alphabet.length;
				newString.push(alphabet[index]);
			} else {

				index = index + movement;
				newString.push(alphabet[index]);
			}
		}
	});

	return newString.join('').toString();
}
caesarCipher('www.abc.xy', 87);
