
    function generateRandomNum() {
        return Math.floor( ( (Math.random() * 1999999) + 1000000 ) ); 
    }

    
    function loadMedia() {
    
        
        $.ajax({
            url: 'http://www.omdbapi.com/?i=tt' + generateRandomNum(),
            dataType: 'jsonp',
            success: function(data) {
                var $movieContent = $('#movie_content');
                
                console.log(data.Poster);
                
                $movieContent.find('h4').html(data.Title);
                $movieContent.find('p').html(data.Plot);
                
                
                var img = document.createElement('img');
                
                img.src = data.Poster;
                
                $('#movie_content').append(img);
                
            }
        });
        
        
        
    }
    
    
    
    $('#movie_button').on('click', function() {
        loadMedia();
    });
    

    
                 
            
                 