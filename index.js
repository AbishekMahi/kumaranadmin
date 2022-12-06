// preview
function preview() {
    var title = document.getElementById("title").value;
    var days = document.getElementById("days").value;
    var imgurl = document.getElementById("url").value;
    var places = document.getElementById("places").value;
    var about = document.getElementById("about").value;
    var itinerary = document.getElementById("Itinerary").value;
    var adminName = document.getElementById("name").value;
    var price = document.getElementById("price").value;

    document.getElementById("titlePreview").innerHTML = title;
    document.getElementById("daysPreview").innerHTML = days;
    document.getElementById("imgPreview").src = imgurl;
    document.getElementById("placesPreview").innerHTML = places;
    document.getElementById("aboutPreview").innerHTML = about;
    document.getElementById("planPreview").innerHTML = itinerary;
    document.getElementById("namePreview").innerHTML = adminName;
    document.getElementById("pricePreview").innerHTML = price;

    var checkboxes =
        document.getElementsByName('Providing');

    var result = "";

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value
                + " ";
        }
    }
    document.getElementById('whatwe').innerHTML = result;
    document.getElementById('provide').value = result;
}


