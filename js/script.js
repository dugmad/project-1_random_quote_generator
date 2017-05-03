


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

//this calls the printQuote function 
//to display a random quote when page first loads
printQuote();

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}

function getRandomQuote(){
	var randomQuote = Math.floor(Math.random() * quotes.length); 	//This function generates a random quote
	var splicedQuote = quotes.splice(randomQuote, 1)[0];			//removes the quote from the quotes array 
	displayedQuote.push(splicedQuote);								//adds it to the displayedQuote array.
		
		if (quotes.length === 0) {									//When the all of the quotes in the quotes arry have been used
			quotes = displayedQuote;								//the quotes array is set to displayQuotes 
			displayedQuote = [];									//and displayQuotes array is to an empty array( or reset). 
			}
		return splicedQuote;		
} 

//this function generates a random color
function getRandomColor() {
	var randomColor 
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

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
	console.log(quotes.quote, quotes.source, quotes.citation, quotes.year, quotes.trilogy);

	//this prints the new random quote to the page 
	print(message);

	//this calls the randomColor function to set a randomColor
	getRandomColor();

	//this variable stores the randomColor that was called above
	var newColor = getRandomColor();

	//these two statements apply the backgroundColor that was called to change the color when a new quote is displayed
	document.body.style.backgroundColor = newColor;
	document.getElementById('loadQuote').style.backgroundColor = newColor;

}