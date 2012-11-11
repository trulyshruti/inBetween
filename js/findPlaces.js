function printLocs(lati, longi, query){
	if (lati.toString() == 'NaN' || lati.toString() == 'null' || lati === 0)
		lati = 40.5592;
	if (longi.toString() == 'NaN' || longi.toString() == 'null' || longi === 0)
		longi = -74.3164;
	var url = 'https://api.foursquare.com/v2/venues/search?ll='+lati+','+longi+'&query='+query+'&client_id=2POUFAUU4ZBJ2MTDOY3S2YHR2NIT52FYW0LUTPHBMNTJFJNQ&client_secret=YFDZI1YWV3ZI5S5SPM2DZJEQIEBPIDJ5XFZBWTIKIQZVQNYM&v=20120101';

		$.getJSON(url,
		    function(data) {
		        $.each(data.response.venues, function(i,venues){
		            content = '<center>';
		            content += '<p> <br />';
		            addy = '';
					if(venues.name != null) {
						content += '&nbsp;' + venues.name + '<br />';
					}
					if(venues.location.address != null) {
						content += '&nbsp;' + venues.location.address + '<br />';
						addy += venues.location.address + ' ';
					}
					if(venues.location.crossStreet != null) {
						content += ' &nbsp;' + venues.location.crossStreet + '<br />';
						addy += venues.location.crossStreet + ' ';
					}
					if(venues.location.city != null) {
						content += ' &nbsp;' + venues.location.city + ', ';
						addy += ', ' + venues.location.city + '';
					}
					if(venues.location.state != null) {
						content += ' &nbsp;' + venues.location.state + '';
						addy += ', ' + venues.location.address state+ ' ';
					}
					if(venues.location.postalCode != null) {
						content += ' &nbsp;' + venues.location.postalCode + '';
						addy += venues.location.postalCode + ' ';
					}
					if(venues.location.distance != null) {
						content += '<br /> &nbsp; Distance: ' + venues.location.distance + '<br />';
					}
					if(venues.contact.phone != null) {
						content += '&nbsp;' + venues.location.phone + '<br />';
					}
					content += '<a href=';
					content += 'Find on Google Maps!></a>';
					content += '</p> </center>';
					$(content).appendTo("#names");
		       });
		});
}