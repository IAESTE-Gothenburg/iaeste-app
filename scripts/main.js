

var mainContent;
var header;
var navButtons;
var headerTitle;
var headerIcon;
var navIcon;

document.addEventListener('DOMContentLoaded', function(){
	mainContent = document.getElementsByTagName('main')[0];
	navButtons = document.getElementsByTagName('footer')[0].getElementsByTagName('button');
	headerTitle = document.getElementById('header-title');
	headerIcon = document.getElementById('header-icon');
	header = document.getElementsByTagName('header')[0];

	addInternships();
	addInternships();
	addInternships();

	// Add nav icon
	var icon = document.createElement('i');
	icon.classList.add('fa');
	icon.classList.add('fa-arrow-left');
	icon.classList.add('fa-2x');
	icon.id = 'navBack';
	icon.onclick = navBack;
	icon.style.display = 'none';
	header.appendChild(icon);
	navIcon = document.getElementById('navBack');
});

function addInternships() {
	headerTitle.innerHTML = 'Internships';
	headerIcon.style.display = 'initial';
	for (var i = 0; i < data.internships.length; i++) {
		var t = data.internships[i];

		// Creates container for internship
		var container = document.createElement('div');
		container.classList.add('internship');
		container.id = t.refNr;
		container.onclick = viewInternship;
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

function viewInternship(e) {
	mainContent.scrollTop = 0;
	var id = e.currentTarget.id;
	mainContent.innerHTML = '';
	for (var i = 0; i < data.internships.length; i++) {
		var t = data.internships[i];
		if (t.refNr == id) {
			// Create container element
			var container = document.createElement('article');
			container.id = 'internship-view';

			// Create flag container
			var flagContainer = document.createElement('div');
			flagContainer.classList.add('flag-container');
			var image = document.createElement('img');
			image.src = t.countryImage;
			flagContainer.appendChild(image);
			container.appendChild(flagContainer);

			// Create location container
			var locationContainer = document.createElement('div');
			locationContainer.classList.add('location');
			addTextElement('h3', t.refNr, locationContainer);
			addTextElement('h4', t.location + ', ' + t.country, locationContainer);
			addTextElement('h6', 'Number of weeks', locationContainer)
			addTextElement('p', t.nrOfWeeks, locationContainer);
			addTextElement('h6', 'Time period', locationContainer);
			addTextElement('p', t.period, locationContainer);
			container.appendChild(locationContainer);

			// Employer heading
			addTextElement('h3', t.employer, container);

			// Field list
			addTextElement('h5', 'Field', container);
			var list = document.createElement('ul');
			for (var i = 0; i < t.field.length; i++) { addTextElement('li', t.field[i], list); }
			container.appendChild(list);

			// Specialization list
			if (t.specialization.length > 0) {
				addTextElement('h5', 'Specialization', container);
				var list = document.createElement('ul');
				for (var i = 0; i < t.specialization.length; i++) { addTextElement('li', t.specialization[i], list); }
				container.appendChild(list);
			}
			
			// Add description
			//addTextElement('h5', 'Description', container);
			addTextElement('p', t.description, container);

			navIcon.style.display = 'block';
			mainContent.appendChild(container);
			break;
		}
	}
}

function navBack() {
	navTo(1);
}


