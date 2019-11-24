var elixir = require('laravel-elixir');
var gulp = require('gulp');

elixir.config.sourcemaps = false;

elixir(function(mix){
    mix.sass('resources/assets/sass/app.scss', 'resources/assets/css');

    mix.styles(
        [
            'css/app.css'
        ], 
        'public/css/Site.css',                                          
        'resources/assets');

    var bowerPath = 'bower/vendor';

    mix.scripts(
        [
            bowerPath + '/jquery/dist/jquery.min.js',
            bowerPath + '/jquery-snowfall/dist/snowfall.jquery.min.js',
            bowerPath + '/bootstrap/dist/js/bootstrap.min.js',

            'js/*.js'
        ],
        'public/js/site.js',
        'resources/assets');
});