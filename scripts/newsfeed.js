function addNewsfeed() {
	headerTitle.innerHTML = 'Nyheter';
	headerIcon.style.display = 'initial';
	for (var i = 0; i < news.story.length; i++) {
		var t = news.story[i];

		var container = document.createElement('article');
		container.classList.add('newsItem');
		container.id = t.id;
		container.onclick = viewNewsItem;

		var image = document.createElement('img');
		image.src = t.image;
		container.appendChild(image);

		addTextElement('h2', t.name, container);
		addTextElement('p', t.location, container);

		if (t.startDate == t.endDate) {
			var date = t.startDate
		} else {
			var date = t.startDate + ' - ' + t.endDate;
		}
		addTextElement('h3', date, container);
		var time = 'Börjar vid ' + t.startTime;
		addTextElement('p', time, container);

		mainContent.appendChild(container);
	}
}

function viewNewsItem(e) {
	mainContent.scrollTop = 0;
	var id = e.currentTarget.id;
	mainContent.innerHTML = '';
	for (var i = 0; i < news.story.length; i++) {
		var t = news.story[i];
		if (t.id == id) {
			headerTitle.innerHTML = t.startDate;
			headerIcon.style.display = 'none';

			// Create container element
			var container = document.createElement('article');
			container.id = 'news-item-view';

			// Information box
			var box = document.createElement('section');

			// Create news image
			var image = document.createElement('img');
			image.src = t.image;
			box.appendChild(image);

			// Event name
			addTextElement('h2', t.name, box);

			// Event time
			var text = t.startTime + ' den ' + t.startDate + ' - ' + t.endTime + ' den ' + t.endDate;
			addTextElement('p', text, box);

			// Event location
			addTextElement('p', t.location, box);

			// Event link
			var link = document.createElement('a');
			link.href = '';
			var icon = document.createElement('i');
			icon.classList.add('fa');
			icon.classList.add('fa-facebook');
			link.appendChild(icon);
			text = document.createTextNode(' Läs mer');
			link.appendChild(text);
			box.appendChild(link);

			// Add box to container
			container.appendChild(box);

			// Event description
			addTextElement('p', lorem, container);
			addTextElement('p', lorem, container);
			addTextElement('p', lorem, container);

			navIcon.style.display = 'block';
			mainContent.appendChild(container);
			break;
		}
	}
}

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas placeat illo incidunt temporibus fuga excepturi nemo dicta, architecto nesciunt, tempora dignissimos nobis nisi et necessitatibus reiciendis omnis at facere praesentium!';

var news = {
	story: [
	{
		id: 'id-1',
		name: 'NM i Göteborg',
		startDate: '24 februari',
		endDate: '26 februari',
		startTime: '17:00',
		endTime: '15:00',
		location: 'Göteborg',
		description: '',
		image: 'images/news/NM.jpg'
	},
	{
		id: 'id-2',
		name: 'IAESTE Connect Conference 2017',
		startDate: '26 april',
		endDate: '30 april',
		startTime: '16:00',
		endTime: '11:00',
		location: 'Stockholm',
		description: '',
		image: 'images/news/connect.jpg'
	}
	]
};