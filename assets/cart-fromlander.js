$(document).ready(function() {
	
	var pathname = window.location.pathname+window.location.search;
	
	//If from a landing page, hide the navigation:
		if (pathname.includes('fromlander')){
			console.log('From Landers');
			$('.header-tools .navigation').hide();
			$('.header-actions').hide();
		}
	
});