function peopleliststuff(){
    var $stuff = $("<ol>")
    for(var j = 1; j<10; j++){
        jQuery.ajax("http://swapi.co/api/people?page=" + j).done(function(results){
            var peoplestuff = results.results
            console.log(peoplestuff)
            for(var i = 0; i < peoplestuff.length; i++){
                $stuff.html($stuff.html()+ peoplestuff[i]['name'] + "<br>")
                $("#xlocation").append($stuff)
            }
        })
    }
}

function movieliststuff(){
    var $stuff = $("<ol>")
        jQuery.ajax("http://swapi.co/api/films").done(function(results){
            var moviestuff = results.results
            for(var i = 0; i < moviestuff.length; i++){
                $stuff.html($stuff.html()+ moviestuff[i]['title'] + "<br>")
                $("#xlocation").append($stuff)
            }
        })
}

function vehiclesliststuff(){
    var $stuff = $("<ol>")
    for(var j = 1; j<5; j++){
        jQuery.ajax("http://swapi.co/api/vehicles?page=" + j).done(function(results){
            var vehiclesstuff = results.results
            for(var i = 0; i < vehiclesstuff.length; i++){
                $stuff.html($stuff.html()+ vehiclesstuff[i]['name'] + "<br>")
                $("#xlocation").append($stuff)
            }
        })
    }
}

function peoplesearch(name){
    var searchName = document.getElementById("name").value
    console.log(searchName)
    var $stuff = $("<ol>")
    for(var j = 1; j<10; j++){
        jQuery.ajax("http://swapi.co/api/people?page=" + j).done(function(results){
            var peoplestuff = results.results
            for(var i = 0; i < peoplestuff.length; i++){
                if(searchName==peoplestuff[i]['name']){
                    $stuff.html("Name: " + peoplestuff[i]['name'] + "<br>" +
                                "Skin Color: " + peoplestuff[i]['skin_color'] + "<br>" +
                                "Hair Color: " + peoplestuff[i]['hair_color'] + "<br>" +
                                "Eye Color: " + peoplestuff[i]['eye_color'] + "<br>" +
                                "Birth Year: " + peoplestuff[i]['birth_year'] + "<br>" +
                                "Gender: " + peoplestuff[i]['gender'] + "<br>" +
                                "Homeworld: " + peoplestuff[i]['homeworld'] + "<br>" )
                    $("#xlocation").append($stuff)
                }

            }
        })
    }
}


function clearBoys(){
    document.getElementById("xlocation").innerHTML = ""
}

$("#vehiclesButton").click(vehiclesliststuff)
$("#movieButton").click(movieliststuff)
$("#peopleButton").click(peopleliststuff)
$("#clearButton").click(clearBoys)
$("#submit").click(peoplesearch)

// var $stuff = $("<p>")
// var results = jQuery.ajax( 'http://api.open-notify.org/iss-now.json'  ).done(function(){
//     var blah = results.responseJSON
//     $stuff.html(blah['iss_position']['longitude'] +" "+ blah['iss_position']['latitude'])
//     $("#xlocation").append($stuff)})
