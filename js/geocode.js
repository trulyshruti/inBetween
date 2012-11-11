function getLocs(first, second, point) {

		var yourLoc = first;
		var otherLoc = second;
		var poi = point;

		var latitude = 0;
		var longitude = 0;

		var urlFirst = 'http://where.yahooapis.com/geocode?location=';
		urlFirst += yourLoc;
		urlFirst += '&appid=&flags=J';

	    function getLati(address) {
	    	var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': address}, function(results, status) {

			  if (status == google.maps.GeocoderStatus.OK) {
			    latitude = results[0].geometry.location.lat();
			    // longitude = results[0].geometry.location.lng();
			    return latitude;
			  } 
			}); 
		}

		function getLongi(address) {
	    	var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': address}, function(results, status) {

			  if (status == google.maps.GeocoderStatus.OK) {
			    // latitude = results[0].geometry.location.lat();
			    longitude = results[0].geometry.location.lng();
			    return longitude;
			  } 
			}); 
		}

		var yourLat = getLati(first);
		var otherLat = getLati(second);

    	var lat = (yourLat + otherLat)/2;
    	console.log(lat);

		var yourLon = getLongi(first);
		var otherLon = getLongi(second);

    	var lon = (yourLon + otherLon)/2;
    	console.log(lon);

		var lati = (lat).toString();
		var longi = (lon).toString();
		var query = poi;

		printLocs(lati, longi, point);
}