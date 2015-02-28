var movieGenreId = {
    'Action & Adventure': 4401,
    'Anime': 4402,
    'Classics': 4403,
    'Comedy': 4404,
    'Documentary': 4405,
    'Drama': 4406,
    'Foreign': 4407,
    'Horror': 4408,
    'Independent': 4409,
    'Kids & Family': 4410,
    'Musicals': 4411,
    'Romance': 4412,
    'Sci-Fi & Fantasy': 4413,
    'Short Films': 4414,
    'Special Interests': 4415,
    'Thriller': 4416,
    'Sports': 4417,
    'Western': 4418,
    'Urban': 4419,
    'Holiday': 4420,
    'Made For TV': 4421,
    'Concert Films': 4422,
    'Music Documentaries': 4423,
    'Music Feature Films': 4424,
    'Japanese Cinema': 4425,
    'Jidaigeki': 4426,
    'Tokusatsu': 4427,
    'Korean Cinema': 4428
}  



var movieList = movies.feed.entry;
    
$('#movie_button').on('click', function(e) {
    var genreSelection = $('#genre_selector').val();

    var filteredSelection = filterGenre(movieList, genreSelection);

    $('#movie_content').html('');

    for (var i = 0; i < filteredSelection.length; i++) {
        var html = '<div id=m-' + i + '>' + 
                    '<div class=movie_top>' +
                        '<div class=movie_top_left>' +
                              '<img src=' + filteredSelection[i]['im:image'][2].label + '>' + 
                        '</div>' +
                        '<div class=movie_top_right>' +
                            '<h4>' + filteredSelection[i]['im:name'].label + '</h4>' + 
                            '<p>' + filteredSelection[i].summary.label + '</p>' +                            '</div>' +
                        '<div class=trailer></div>' +
                    '</div>';
            
        $('#movie_content').append(html); 
    } // end loop
        
    for (var i = 0; i < filteredSelection.length; i++) {
        (function() {
            var sid = i;
            
            $.ajax({
                url: 'http://gdata.youtube.com/feeds/api/videos?q=' + filteredSelection[i]['im:name'].label + '+' + filteredSelection[i]['im:releaseDate'].label.substring(0, 4) + '+' + 'trailer' + '&format=5&max-results=1&v=2&alt=jsonc',
         
                success: function (data){
                    var url = data.data.items[0].player['default'];
                    var url = url.replace("watch?v=", "v/");
                    var player = '<iframe width="560" height="315" src=' + url + ' frameborder="0" allowfullscreen></iframe>';   
                
                    $('#m-' + sid).find('.trailer').append(player);

                }, // success
            });
        })(); // closure
    } // loop

});








    function filterGenre(arr, genre) {
        var genreArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]['category']['attributes']['label'] === genre) {
                genreArr.push(arr[i]);
            }
        }

        return genreArr;
    }







    function getGenres(obj) {
        var genres = [];

        for (var i = 0; i < obj.feed.entry.length; i++) {
            genres.push(obj.feed.entry[i].category.attributes.label)
        }

        return genres;
    }


