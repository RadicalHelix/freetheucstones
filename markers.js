// From MDN
function randRange(min, max) {
    return Math.random() * (max - min) + min;
}

function initMap() {
    var centerLocation = {lat: 40.442706, lng: -79.943677};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: centerLocation
    });

    var lat0 = 40.444398;
    var lon0 = -79.946631;
    var lat1 = 40.441393;
    var lon1 = -79.940703;

    var markers = [];
    for (var i = 0; i < 10; i++)
    {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(randRange(lat1, lat0),
                                             randRange(lon0, lon1)),
            map: map
        });
        markers.push(marker);
    }

    console.log(markers);
}
