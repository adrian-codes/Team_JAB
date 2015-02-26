    // function loadMedia(title) {
        

     
    //             setTimeout(function() {
    //                 $.ajax({
    //                 url: 'http://gdata.youtube.com/feeds/api/videos?q=' + data.Title + '+' + data.Year + '+' + 'trailer' + '&format=5&max-results=1&v=2&alt=jsonc',
    //                     success: function(data){
    //                     var url = data.data.items[0].player['default'];
    //                     var url = url.replace("watch?v=", "v/");
    //                     var player = '<iframe width="560" height="315" src=' + url + ' frameborder="0" allowfullscreen></iframe>';
                         
    //                     $('.trailer').html(player)
    //                     }, // success
    //                 });
    //             });
    //         } // success
    //     });
                
       
    // } // loadMedia
        
    
    
    $('#movie_button').on('click', function() {
        loadMedia();
    });
    

    var movieList = movies.feed.entry;
    
    //movieList[i]['im:image'][2].label
    //movieList[i]['im:name'].label
    //movieList[i].summary.label
    //movieList[i].category.attributes.label




    function getGenres(obj) {
        var genres = [];

        for (var i = 0; i < obj.feed.entry.length; i++) {
            genres.push(obj.feed.entry[i].category.attributes.label)
        }

        return genres;
    }