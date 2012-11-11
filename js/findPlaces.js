function printLocs(lati, longi, query){
	if (lati.toString() == 'NaN' || lati.toString() == 'null' || lati === 0)
		lati = 40.5592;
	if (longi.toString() == 'NaN' || longi.toString() == 'null' || longi === 0)
		longi = -74.3164;
	var url = 'https://api.foursquare.com/v2/venues/search?ll='+lati+','+longi+'&query='+query+'&client_id=2POUFAUU4ZBJ2MTDOY3S2YHR2NIT52FYW0LUTPHBMNTJFJNQ&client_secret=YFDZI1YWV3ZI5S5SPM2DZJEQIEBPIDJ5XFZBWTIKIQZVQNYM&v=20120101';
	console.log(url);

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
					content += '<a href=\"https://foursquare.com/explore?near=';
					content += venues.location.city + '%2C%20' + venues.location.state;
					content += '&q=' + venues.name + '\">';
					content += 'Find on Foursquare!</a><br />';
					content += '</p> </br> </center>';
					$(content).appendTo("#names");
		       });
		});
}