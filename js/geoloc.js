function getLocs(first, second, point) {

		var yourLoc = first;
		var otherLoc = second;
		var poi = point;

		var latitude = 0;
		var longitude = 0;

		var urlFirst = 'var url = http://maps.googleapis.com/maps/api/geocode?output=json&address=';
		urlFirst += yourLoc;
		urlFirst += '&sensor=false';

		var urlSecond = 'var url = http://maps.googleapis.com/maps/api/geocode?output=json&address=';
		urlSecond += otherLoc;
		urlSecond += '&sensor=false';

		var firstLoc = $.getJSON(urlFirst);
		var secondLoc = $.getJSON(urlSecond);

    	var yourLat = firstLoc.geometry.location.lat;
    	var otherLat = secondLoc.geometry.location.lat;

    	var lat = (yourLat + otherLat)/2;
    	// console.log(lat);

    	var yourLon = firstLoc.geometry.location.lng;
    	var otherLon = secondLoc.geometry.location.lng;

    	var lon = (yourLon + otherLon)/2;
    	// console.log(lon);

		var lati = (lat).toString();
		var longi = (lon).toString();
		var query = poi;

		printLocs(lati, longi, point);
}

function printLocs(lati, longi, query){
	var url = 'https://api.foursquare.com/v2/venues/search?ll='+lati+','+longi+'&query='+query+'&client_id=2POUFAUU4ZBJ2MTDOY3S2YHR2NIT52FYW0LUTPHBMNTJFJNQ&client_secret=YFDZI1YWV3ZI5S5SPM2DZJEQIEBPIDJ5XFZBWTIKIQZVQNYM&v=20120101';

		$.getJSON(url,
		    function(data) {
		        $.each(data.response.venues, function(i,venues){
		            content = '<center>';
		            content += '<p> <br />';
					if(venues.name != null) {
						content += '&nbsp;' + venues.name + '<br />';
					}
					if(venues.location.address != null) {
						content += '&nbsp;' + venues.location.address + '<br />';
					}
					if(venues.location.crossStreet != null) {
						content += ' &nbsp;' + venues.location.crossStreet + '<br />';
					}
					if(venues.location.city != null) {
						content += ' &nbsp;' + venues.location.city + ', ';
					}
					if(venues.location.state != null) {
						content += ' &nbsp;' + venues.location.state + '';
					}
					if(venues.location.postalCode != null) {
						content += ' &nbsp;' + venues.location.postalCode + '';
					}
					if(venues.location.distance != null) {
						content += '<br /> &nbsp; Distance: ' + venues.location.distance + '<br />';
					}
					if(venues.contact.phone != null) {
						content += '&nbsp;' + venues.location.phone + '<br />';
					}
					content += '</p> </center>';
					$(content).appendTo("#names");
		       });
		});
}