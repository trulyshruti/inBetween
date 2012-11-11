$(document).ready(function () {
 
    // wire up button click
    $('#go').click(function () {
        // get the address the user entered
        var address = $('#address').val();
        if (address) {
            // use Google Maps API to geocode the address
            // set up the Geocoder object
            var geocoder = new google.maps.Geocoder();
            // return the coordinates
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        // print results
                        printLatLong(results[0].geometry.location.lat(),
                            results[0].geometry.location.lng());
                    } else {
                        error('Google did not return any results.');
                    }
 
                } else {
                    error("Reverse Geocoding failed due to: " + status);
                }
            });
        }
        else {
            error('Please enter an address');
        }
    });
 
});
 
// output lat and long
function printLatLong(lat, long) {
    $('body').append('<p>Lat: ' + lat + '</p>');
    $('body').append('<p>Long: ' + long + '</p>');
}
 
function error(msg) {
    alert(msg);
}

