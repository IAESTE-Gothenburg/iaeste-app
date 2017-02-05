

var mainContent;
var navButtons;
var headerTitle;
var headerIcon;

document.addEventListener('DOMContentLoaded', function(){
	mainContent = document.getElementsByTagName('main')[0];
	navButtons = document.getElementsByTagName('footer')[0].getElementsByTagName('button');
	headerTitle = document.getElementById('header-title');
	headerIcon = document.getElementById('header-icon');

	addInternships();
	addInternships();
	addInternships();
});

function addInternships() {
	headerTitle.innerHTML = 'Internships';
	headerIcon.style.display = 'initial';
	for (var i = 0; i < data.internships.length; i++) {
		var t = data.internships[i];

		// Creates container for internship
		var container = document.createElement('div');
		container.classList.add('internship');
		// Creates left side content
		var leftContent = document.createElement('div');
		leftContent.classList.add('left-content');
		var image = document.createElement('img');
		image.src = t.countryImage;
		leftContent.appendChild(image);

		var location = t.location;
		addTextElement('h3', location, leftContent);

		// Creates right side content
		var rightContent = document.createElement('div');
		rightContent.classList.add('right-content');
		
		addTextElement('h2', t.employer, rightContent);

		var weeks = 'Weeks Offered: ' + t.nrOfWeeks;
		addTextElement('h3', weeks, rightContent);

		var period = 'Within the months: ' + t.period;
		addTextElement('h3', period, rightContent);

		var fields = 'Fields: ' + t.fieldAbbr;
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


