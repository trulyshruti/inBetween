// http://www.youtube.com/watch?v=W5kKOEOWHHE
// code is within one single HTML script tag
// getLocation() placed in script not as function

function getLocation() {
	if(navigator.geolocation){
		navigator.gelocation.getCurrentPosition(userPosition);
	} else {
		alert('Geolocation not available.');
	}
}

function userPosition(position) {
	// alert('Your latitude is : ' + position.coords.latitude + ' and longitude is : ' + position.coords.longitude);
}