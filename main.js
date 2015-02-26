
    function generateRandomNum() {
        return Math.floor( ( (Math.random() * 1000000) + 1000000 ) ); 
    }

    
    function loadMedia(title) {
    
        
        $.ajax({
            // url: 'http://www.omdbapi.com/?i=tt' + generateRandomNum(),

            url: 'http://www.omdbapi.com/?s=' + title +'&tomatoes=true',
            dataType: 'jsonp',
            success: function(data) {
                var $movieContent = $('#movie_content');
                
                
                $movieContent.find('h4').html(data.Title);
                $movieContent.find('p').html(data.Plot);
                
                // create poster img
                var poster = document.createElement('img');
                poster.setAttribute('src', data.Poster);
                

                $('#poster').html(poster);
                console.log(data);
            }
        });
        
    }
    
    
    
    $('#movie_button').on('click', function() {
        loadMedia();
    });
    


    function test(title) {

$.ajax({
      url: 'http://gdata.youtube.com/feeds/api/videos?q='+title+'&format=5&max-results=1&v=2&alt=jsonc',
        success: function(data){
            var url = data.data.items[0].player['default'];
            var url = url.replace("watch?v=", "v/");
            var player = '<iframe width="560" height="315" src=' + url + ' frameborder="0" allowfullscreen></iframe>';
            $('#container').html(player)
            console.log(data.data.items[0].player['default']);
        },

    });

}


                 
            
                 