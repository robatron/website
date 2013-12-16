// Grunt build script for front-end assets
var path = require( 'path' );


// Settings
// --------
var ASSET_ROOT  = '..';
var BOWER_LIBS  = 'bower_components';
var SRC_ROOT    = path.join( ASSET_ROOT, '_src' );


// Grunt config
// ------------
module.exports = function( grunt ){


    // Initialie
    grunt.initConfig( {

        // Clean directories
        clean: {

            options: {
                force: true,
            },

            main: {
                src: [
                    path.join( ASSET_ROOT, 'css' ),
                    path.join( ASSET_ROOT, 'fonts' ),
                    path.join( ASSET_ROOT, 'js' )
                ]
            },
        },


        // Copy selected files
        copy: {

            bootstrap: {
                files: [
                    {
                        expand:     true,
                        flatten:    true,
                        src:        path.join( BOWER_LIBS, 'bootstrap', 'dist', 'css', 'bootstrap.min.css' ),
                        dest:       path.join( ASSET_ROOT, 'css' )
                    },
                    {
                        expand:     true,
                        flatten:    true,
                        src:        path.join( BOWER_LIBS, 'bootstrap', 'dist', 'fonts', '*' ),
                        dest:       path.join( ASSET_ROOT, 'fonts' )
                    },
                    {
                        expand:     true,
                        flatten:    true,
                        src:        path.join( BOWER_LIBS, 'bootstrap', 'dist', 'js', 'bootstrap.min.js' ),
                        dest:       path.join( ASSET_ROOT, 'js' )
                    }
                ]
            },


            jquery: {
                expand:     true,
                flatten:    true,
                src:        path.join( BOWER_LIBS, 'jquery', 'jquery.min.js' ),
                dest:       path.join( ASSET_ROOT, 'js' )
            },


            custom: {
                expand:     true,
                flatten:    true,
                src:        path.join( SRC_ROOT, 'css', '*' ),
                dest:       path.join( ASSET_ROOT, 'css' )
            }
        }
    } );


    // Load plugins
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );


    // Register tasks
    grunt.registerTask( 'default', [
        'clean',
        'copy'
    ] );
};
