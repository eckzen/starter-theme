// When the DOM is ready
$(function() {
	
	$("nav a, .date").append("<span>&nbsp</span>");
	
	$("nav a").hover(function(e) {
	
		$(this)
			.hoverFlow(e.type, { width: 230 }, 200)
			.css('overflow', 'visible')
			.find('span')
			.hoverFlow(e.type, { width: 15 }, 200)
		
	}, function(e) {
		
		$(this)
			.hoverFlow(e.type, { width: 215 }, 200)
			.css('overflow', 'visible')
			.find('span')
			.hoverFlow(e.type, { width: 20 }, 200)
		
	});
	
})