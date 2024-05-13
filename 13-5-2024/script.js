document.getElementById('genres').addEventListener('change', function() {
    var selectedGenre = this.value;
    var movies = document.querySelectorAll('.movies > div');

    movies.forEach(function(movie) {
        var genre = movie.getAttribute('id');
        if (selectedGenre === 'All' || genre === selectedGenre.toLowerCase()) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
});
