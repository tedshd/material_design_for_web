module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        watch: {
          html: {
            files: ['*.html'],
            options: {
              livereload: true,
            }
          },
          js: {
            files: ['javascript/*.js'],
            // tasks: ['concat:js', 'uglify:js'],
            options: {
              livereload: true,
            }
          },
          css: {
            files: ['sass/*.scss'],
            tasks: ['compass'],
            options: {
              livereload: true,
            }
          }
        },
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: 'sass',
                    cssDir: 'css',
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task(s).
    grunt.registerTask('default', ['watch', 'compass']);
}
