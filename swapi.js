function swapistuff(){
    var $stuff = $("<ol>")
    for(var j = 1; j<10; j++){
    jQuery.ajax("http://swapi.co/api/people?page=" + j).done(function(results){
        var peoplestuff = results.results
        for(var i = 0; i < peoplestuff.length; i++){
        $stuff.html($stuff.html()+ peoplestuff[i]['name'] + "<br>")
        $("#xlocation").append($stuff)
    }
})
    }
}
swapistuff()
// var $stuff = $("<p>")
// var results = jQuery.ajax( 'http://api.open-notify.org/iss-now.json'  ).done(function(){
//     var blah = results.responseJSON
//     $stuff.html(blah['iss_position']['longitude'] +" "+ blah['iss_position']['latitude'])
//     $("#xlocation").append($stuff)})
