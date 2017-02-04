

var mainContent;
var navButtons;

document.addEventListener('DOMContentLoaded', function(){
	mainContent = document.getElementsByTagName('main')[0];
	navButtons = document.getElementsByTagName('footer')[0].getElementsByTagName('button');

	addInternships();
	addInternships();
	addInternships();
});

function addInternships() {
	for (var i = 0; i < data.internships.length; i++) {
		// Creates container for internship
		var container = document.createElement('div');
		container.classList.add('internship');
		// Creates left side content
		var leftContent = document.createElement('div');
		leftContent.classList.add('left-content');
		var image = document.createElement('img');
		image.src = data.internships[i].countryImage;
		leftContent.appendChild(image);

		var location = data.internships[i].location;
		addTextElement('h3', location, leftContent);

		// Creates right side content
		var rightContent = document.createElement('div');
		rightContent.classList.add('right-content');
		
		var employer = data.internships[i].employer;
		addTextElement('h2', employer, rightContent);

		var weeks = 'Weeks Offered: ' + data.internships[i].nrOfWeeks;
		addTextElement('h3', weeks, rightContent);

		var period = 'Within the months: ' + data.internships[i].period;
		addTextElement('h3', period, rightContent);

		var fields = 'Fields: ' + data.internships[i].fieldAbbr;
		addTextElement('h3', fields, rightContent);

		// Append content
		container.appendChild(leftContent);
		container.appendChild(rightContent);
		mainContent.appendChild(container);
	}
}

function addTextElement(type, text, appendTo) {
	var element = document.createElement(type);
	var textNode = document.createTextNode(text)
	element.appendChild(textNode);
	appendTo.appendChild(element);
}


