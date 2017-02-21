function navTo(target) {
	mainContent.innerHTML = '';
	mainContent.scrollTop = 0;
	navIcon.style.display = 'none';
	switch(target) {
	    case 0:
	    	addNewsfeed();
	    	addNewsfeed();
	    	addNewsfeed();
	        break;
	    case 1:
	        addInternships();
	        addInternships();
	        addInternships();
	        break;
	    case 2:
	    	addAbout();
	        break;
	    case 3:
	    	addEngage();
	        break;
	    case 4:
	    	addSettings();
	        break;
	    default:
	    	return
	}
	for (var i = 0; i < navButtons.length; i++) {
		navButtons[i].classList.remove('active-nav');
	}
	navButtons[target].classList.add('active-nav');
}