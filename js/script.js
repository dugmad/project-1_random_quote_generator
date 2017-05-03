// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, true);

//this loads a new ranadom quote every 30 seconds
var myTimer = setInterval(printQuote,30000);

//this variable is used to begin the message that will display the quote in the browser
var message = '';
//creates an array to hold quotes that have been displayed
var displayedQuote  = [];
//these variables are used when creating the random color
var red;
var green;
var blue;

//this array holds the quotes
var quotes = [
	{
		quote: 'Do. Or do not. There is no try.',
		source: 'Yoda',
		citation: 'The Empire Strikes Back',
		year: 1981,
		trilogy: 'Originals'
	},
	{
		quote: 'Fear is the path to the dark side...fear leads to anger...anger leads to hate...hate leads to suffering.',
		source: 'Yoda',
		citation: 'The Phantom Menace',
		year: 1999,
		trilogy: 'Prequels'
	},
	{
		quote: 'You can’t stop change any more than you can stop the suns from setting.',
		source: 'Shmi Skywalker',
		citation: 'The Phantom Menace',
		year: 1999,
		trilogy: 'Prequels'
	},
	{
		quote: 'The ability to speak does not make you intelligent, now get out of here.',
		source: 'Qui-Gon Jinn',
		citation: 'The Phantom Menace',
		year: 1999,
		trilogy: 'Prequels'
	},
	{
		quote: 'I find your lack of faith disturbing.',
		source: 'Darth Vader',
		citation: 'A New Hope',
		year: 1977,
		trilogy: 'Originals'
	},
	{
		quote: 'Train yourself to let go of everything you fear to lose.',
		source: 'Yoda',
		citation: 'Revenge of the Sith',
		year: 2005,
		trilogy: 'Prequels'
	},
	{	
		quote: "Your eyes can deceive you. Don't trust them.",
		source: 'Obi-Wan Kenobi',
		citation: 'A New Hope',
		year: 1977,
		trilogy: 'Originals'
	}
];


function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
};

function getRandomQuote(){
	var randomQuote = Math.floor(Math.random() * quotes.length); 	//This function generates a random quote
	var splicedQuote = quotes.splice(randomQuote, 1)[0];			//removes that quote from the quotes array 
	displayedQuote.push(splicedQuote)								//adds it to the displayedQuote array.
		if (quotes.length === 0) {									//When the all of the quotes in the quotes arry have been used
			quotes = displayedQuote									//the quotes array is set to displayQuotes 
			displayedQuote = [];									//and displayQuotes array is to an empty array( or reset). 
			if(quotes.length < 8 ) {
				quotes.push(                            			//this adds the quote that displays when the page opens
					{                                   			//into the quote array 
						quote: 'Chewie, we\'re home.', 				//it then becomes part of the random quote rotation.
						source: 'Han Solo', 
						citation: 'The Force Awakens', 
						year: 2015,
						trilogy: 'Sequels'
					}
				)
			}	
		} 
	return splicedQuote;
};

//this function generates a random color
function getRandomColor() {
	var randomColor 
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
};


//this function puts the randomQuote in HTML form so it can be displayed in the browser. 
function printQuote() {
	var quotes = getRandomQuote();
	message = '<p class = "quote">' + quotes.quote + '</p>';
	message += '<p class = "source">' + quotes.source;
	if (quotes.citation) {
		message +=	'<span class="citation">' + quotes.citation + '</span>';
	} else {
		message +='';
	}
	if (quotes.year){
		message +=	'<span class="year">' + quotes.year + '</span>';
	} else {
		message += '';
	} 
	if (quotes.trilogy) {
		message += '<p><span class="trilogy">' + quotes.trilogy +'</span></p>';
	} else {
		message += '';
	}
	
//this logs the quote to the console to verify that the quotes are not repeating before the quotes array is empty
console.log(quotes.quote, quotes.source, quotes.citation, quotes.year, quotes.trilogy)

//this prints the new random quote to the page 
print(message);

//this calls the randomColor function to set a randomColor
getRandomColor();

//this variable stores the randomColor that was called above
var newColor = getRandomColor();

//these two statements apply the backgroundColor that was called to change the color when a new quote is displayed
document.body.style.backgroundColor = newColor;
document.getElementById('loadQuote').style.backgroundColor = newColor;

};
