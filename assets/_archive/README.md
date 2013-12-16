**Important!** Don't edit anything in any directories **not** prefixed with a
'_', e.g., 'js' or 'css'.

They **will** be overwritten in the next build.

Instead, edit files in '_src', then build. See below for instructions


Install Build Dependencies
--------------------------

Assuming you've cloned this repository, and have `cd`ed into it,

1. Install Node (and `npm`) and Ruby (and `gem`) on your system.

1. Install Jekyll

        gem install jekyll


1. Install BowerJS and GruntJS globally

        npm install bower grunt-cli --global


1. Install build and front-end dependencies

        cd _build
        npm install
        bower install


Build
-----

1. Run Grunt from the '_build' directory

        cd _build
        grunt
