$(document).ready(function () {
	$.getJSON("https://graph.facebook.com/zombies",function(data) {
		document.write(data.username);
	});

});
