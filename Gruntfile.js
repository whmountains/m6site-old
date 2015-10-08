/*global module:false*/
module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        // the magic
        atomizer: {
            // basic
            dev: {
                options: {
                    configFile: './atomizer-config.js'
                },
                files: [{
                    src: ['./*.html'],
                    dest: './atomic.css'
                }]
            }
        },

        // simple connect server
        connect: {
            dev: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },

        // watch for changes and run tasks
        watch: {
            dev: {
                options: {
                    livereload: true
                },
                files: [
                    './*.html'
                ],
                tasks: ['atomizer']
            }
        }

    });

    // default task runs atomizer, start server and watch for changes
    // grunt.registerTask('default', ['atomizer', 'connect', 'watch']);
    grunt.registerTask('default', ['atomizer', 'connect', 'watch']);

};
