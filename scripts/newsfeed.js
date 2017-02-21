function addNewsfeed() {
	headerTitle.innerHTML = 'Nyheter';
	headerIcon.style.display = 'initial';
	for (var i = 0; i < news.story.length; i++) {
		var t = news.story[i];

		var container = document.createElement('article');
		container.classList.add('newsItem');
		container.id = t.id;

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