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
        
    

    var movieList = movies.feed.entry;
    
    //movieList[i]['im:image'][2].label
    //movieList[i]['im:name'].label
    //movieList[i].summary.label
    //movieList[i].category.attributes.label


    $('#movie_button').on('click', function(e) {
        var genreSelection = $('#movie_selector').val();

        var filteredSelection = filterGenre(movieList, genreSelection);

        var id = 0;

        $('#movie_content').html('');

        for (var i = 0; i < filteredSelection.length; i++) {
            var html = '<div id=m-' + id++ + '><h1>' + filteredSelection[i]['im:name'].label + '<h1></div>' +
                '<img src=' + filteredSelection[i]['im:image'][2].label + '>';
            
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
                    
                    $('#m-' + sid).append(player);
                }, // success
            });
        })();
        }
    })


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


