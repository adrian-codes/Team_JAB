    function generateRandomNum() {
        return Math.floor( ( (Math.random() * 1000000) + 1000000 ) ); 
    }

    
    function loadMedia(title) {
        var _data;
        
        $.ajax({
            // url: 'http://www.omdbapi.com/?s=' + title +'&tomatoes=true',

            // get random title
            url: 'http://www.omdbapi.com/?i=tt' + generateRandomNum(),
            dataType: 'jsonp',
            success: function(data) {
             

                $movieContent = $('#movie_content');
                 
                $movieContent.find('h4').html(data.Title);
                $movieContent.find('p').html(data.Plot);
                
                // create poster img
                var poster = document.createElement('img');
                poster.setAttribute('src', data.Poster);
                

                $('#poster').html(poster);
                console.log(data);
                setTimeout(function() {
                    $.ajax({
                    url: 'http://gdata.youtube.com/feeds/api/videos?q=' + data.Title + '+' + data.Year + '+' + 'trailer' + '&format=5&max-results=1&v=2&alt=jsonc',
                        success: function(data){
                        var url = data.data.items[0].player['default'];
                        var url = url.replace("watch?v=", "v/");
                        var player = '<iframe width="560" height="315" src=' + url + ' frameborder="0" allowfullscreen></iframe>';
                         
                        $('.trailer').html(player)
                        }, // success
                    });
                });
            } // success
        });
                
       
    } // loadMedia
        
    
    
    $('#movie_button').on('click', function() {
        loadMedia();
    });
    






