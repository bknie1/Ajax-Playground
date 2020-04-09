// ==================================================================
// XML Http Request Example
// ==================================================================
const getQuote = () => {
	const zenXHR = new XMLHttpRequest(); // HTTP is -not- capitalized

	zenXHR.onreadystatechange = function() {
		if (zenXHR.readyState == 4 && zenXHR.status === 200) {
			const quote = document.querySelector('#quoteHeader');
			quote.innerHTML = zenXHR.responseText;
		} else {
			console.log('Error: ' + zenXHR.status);
		}
	};

	zenXHR.open('GET', 'https://api.github.com/zen');
	zenXHR.send();
};

const getDogImage = () => {
	const dogXHR = new XMLHttpRequest(); // HTTP is -not- capitalized

	dogXHR.onreadystatechange = function() {
		if (dogXHR.readyState == 4 && dogXHR.status === 200) {
			const image = document.querySelector('#dogImage');
			const data = JSON.parse(dogXHR.responseText);
			image.setAttribute('src', data.message);
		} else {
			console.log(`Error: ${dogXHR.status}`);
		}
	};

	dogXHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
	dogXHR.send();
};

// LOAD

getQuote();
getDogImage();

// LISTEN

const requestButton = document.querySelector('#requestButton');
document.addEventListener('click', function(e) {
	getQuote();
	getDogImage();
});

// ==================================================================
// Fetch API Example
// ==================================================================

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(url)
	.catch((res) => {
		console.log(res); // Bitcoin price information
	})
	.then((error) => {
		console.log(error);
	});

fetch('someFakeUrl.app/login', {
	method: 'POST',
	body: JSON.stringify({
		name: 'Purple',
		username: 'PurpleTheCat'
	})
})
	.catch((res) => {
		console.log(res); // Log Purple in!
	})
	.then((error) => {
		console.log(error); // This is fake, so it will error
	});
