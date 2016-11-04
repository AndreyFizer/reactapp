module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            options: {
                browserifyOptions: {
                    paths: [
                        './public/source/js',
                        './public/source'
                    ]
                }
            },
            dist   : {
                options: {
                    transform: [
                        ['babelify', {'presets': ['es2015', 'react']}]
                    ]
                },
                files  : {
                    'public/app/bundle.js': ['public/source/js/index.js']
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
                    'public/app/main.css': 'public/source/scss/materialize.scss'
                }
            }
        },
        
        watch: {
            scripts: {
                files: ["./app/**"],
                tasks: ["build"]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    
    grunt.registerTask('start', ['build', 'watch']);
    grunt.registerTask("build", ["browserify", "sass", "htmlmin"]);
};