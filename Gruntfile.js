module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    /*
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [],
        dest: ''
      }
    },
    */
    concurrent: {
        target: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    },
    stitch: {
      options: {
        paths: [
          'frontend/scripts'
        ],
        dependencies: [
          'frontend/components/bacon/dist/Bacon.js'
        ],
        dest: 'public/scripts/app.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'server/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['server/**/*'],
      tasks: ['jshint', 'stitch']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-stitch');

  grunt.registerTask('default', ['watch']);

};
