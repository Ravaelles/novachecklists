const mix = require('laravel-mix')

mix.setPublicPath(path.normalize('./')); // Windows fix

mix.js('resources/js/field.js', 'dist/js/field.js');
   // .sass('resources/sass/field.scss', 'dist/css/field.css');
    // .webpackConfig({
    //     resolve: {
    //         symlinks: false
    //     }
    // })
