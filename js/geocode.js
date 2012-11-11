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

    	var yourLat = firstLoc.results[0].geometry.location.lat;
    	var otherLat = secondLoc.results[0].geometry.location.lat;

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

f