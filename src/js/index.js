import './../scss/custom.scss';
import './../scss/custom.scss';

function message() {
	const element = document.getElementById('loren_ipsum');
	element.onclick = function () {
		element.innerHTML = 'Hello World';
	};
}
message();

console.log('hello world');
