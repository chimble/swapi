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
    var $stuff = $("<ol class='ol'>")
    for(var j = 1; j<10; j++){
        jQuery.ajax("http://swapi.co/api/people?page=" + j).done(function(results){
            var peoplestuff = results.results
            for(var i = 0; i < peoplestuff.length; i++){
                if(searchName==peoplestuff[i]['name']){
                    homeworldbyId(peoplestuff[i]['homeworld'])
                    filmsbyId(peoplestuff[i]['films'])
                    speciesbyId(peoplestuff[i]['species'])
                    vehiclesbyId(peoplestuff[i]['vehicles'])
                    starshipsbyId(peoplestuff[i]['starships'])
                    $stuff.html("Name: " + peoplestuff[i]['name'] + "<br>" +
                                "Skin Color: " + peoplestuff[i]['skin_color'] + "<br>" +
                                "Hair Color: " + peoplestuff[i]['hair_color'] + "<br>" +
                                "Eye Color: " + peoplestuff[i]['eye_color'] + "<br>" +
                                "Birth Year: " + peoplestuff[i]['birth_year'] + "<br>" +
                                "Gender: " + peoplestuff[i]['gender'] + "<br>" +
                                "Homeworld: <span id='homeworld'></span><br>" +
                                "Films: <li class='tab' id='films'></li><br>" +
                                "Vehicles: <li class='tab' id='vehicles'></li><br>" +
                                "Starships: <li class='tab' id='starships'></li><br>" +
                                "Species: <span id='species'></span>")
                    $("#xlocation").append($stuff)
                }

            }
        })
    }
}

function vehiclesearch(vehicle){
    var searchName = document.getElementById("vehicle").value
    var $stuff = $("<ol class='ol'>")
    for(var j = 1; j<5; j++){
        jQuery.ajax("http://swapi.co/api/vehicles?page=" + j).done(function(results){
            var vehiclestuff = results.results
            for(var i = 0; i < vehiclestuff.length; i++){
                if(searchName==vehiclestuff[i]['name']){
                    $stuff.html("Name: " + vehiclestuff[i]['name'] + "<br>" +
                                "Model: " + vehiclestuff[i]['model'] + "<br>" +
                                "Length: " + vehiclestuff[i]['length'] + "<br>" +
                                "max_atmosphering_speed: " + vehiclestuff[i]['max_atmosphering_speed'] + "<br>"
                            )
                    $("#xlocation").append($stuff)
                }

            }
        })
    }
}

function moviesearch(movie){
    var searchName = document.getElementById("movie").value
    var $stuff = $("<ol class='ol'>")
        jQuery.ajax("http://swapi.co/api/films").done(function(results){
            var moviestuff = results.results
            for(var i = 0; i < moviestuff.length; i++){
                if(searchName==moviestuff[i]['title']){
                    $stuff.html("Title: " + moviestuff[i]['title'] + "<br>" +
                                "Director: " + moviestuff[i]['director'] + "<br>" +
                                "Producer(s): " + moviestuff[i]['producer'] + "<br>" +
                                "Release Date: " + moviestuff[i]['release_date'] + "<br>"
                            )
                    $("#xlocation").append($stuff)
                }

            }
        })

}

function speciesbyId(url){
    var address = url[0]
    jQuery.ajax(address).done(function(results){
        $('#species').html(results['name'])
    })
}

function homeworldbyId(url){
    var address = url
    jQuery.ajax(address).done(function(results){
        $('#homeworld').html(results['name'])
    })
}

function filmsbyId(list_urls){
    var list_films = list_urls
    for(var i=0; i<list_films.length; i++){
    jQuery.ajax(list_films[i]).done(function(results){
        $('#films').html($('#films').html() + '<br>' + results['title'] )
    })
}
}

function vehiclesbyId(list_urls){
    var list_vehicles = list_urls
    for(var i=0; i<list_vehicles.length; i++){
    jQuery.ajax(list_vehicles[i]).done(function(results){
        $('#vehicles').html($('#vehicles').html() + '<br>' + results['name'] )
    })
}
}

function starshipsbyId(list_urls){
    var list_starships = list_urls
    for(var i=0; i<list_starships.length; i++){
    jQuery.ajax(list_starships[i]).done(function(results){
        $('#starships').html($('#starships').html() + '<br>' + results['name'] )
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
$("#submit1").click(vehiclesearch)
$("#submit2").click(moviesearch)

// var $stuff = $("<p>")
// var results = jQuery.ajax( 'http://api.open-notify.org/iss-now.json'  ).done(function(){
//     var blah = results.responseJSON
//     $stuff.html(blah['iss_position']['longitude'] +" "+ blah['iss_position']['latitude'])
//     $("#xlocation").append($stuff)})
