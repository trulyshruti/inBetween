function getVenues(lat,long) {
$.getJSON('https://api.foursquare.com/v2/venues/search?ll='+lat+','+long+'&query=mcdonalds&client_id=2POUFAUU4ZBJ2MTDOY3S2YHR2NIT52FYW0LUTPHBMNTJFJNQ&client_secret=YFDZI1YWV3ZI5S5SPM2DZJEQIEBPIDJ5XFZBWTIKIQZVQNYM&v=20120101',
			function(data) {
				$.each(data.response.venues, function(i,venues){
					content = '<p>' + venues.name + '</p>';
					$(content).appendTo("#names");
			   });
		});
}