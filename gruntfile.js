module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            options: {
                browserifyOptions: {
                    paths: [
                        './public/source/js',
                        './public/source'
                    ],
                    debug: true
                }
            },
            dist   : {
                options: {
                    transform: [
                        ['babelify', {'presets': ['es2015', 'react']}]
                    ]
                },
                files  : {
                    'public/build/bundle.js': ['public/source/js/index.js']
                }
            }
        },
        htmlmin   : {
            dist: {
                options: {
                    removeComments    : true,
                    collapseWhitespace: true
                },
                files  : {
                    'public/index.html': 'public/source/sourceIndex.html'
                }
            }
        },
        
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files  : {
                    'public/build/main.css': 'public/source/scss/materialize.scss'
                }
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    
    grunt.registerTask('start', ['build', 'watch:js']);
    grunt.registerTask("build", ["browserify", "sass", "htmlmin"]);
};