module.exports = function(grunt) {

 
  var configs = {
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
    nodemon: {
      dev: {
        options: {
          file: 'init.js',
          args: ['development', 'production'],
          nodeArgs: ['--debug'],
          ignoredFiles: ['README.md', 'node_modules/**'],
          watchedExtensions: ['js'],
          watchedFolders: ['server', 'frontend/scripts'],
          delayTime: 1,
          legacyWatch: true,
          env: {
            PORT: '3000'
          },
          cwd: __dirname
        }
      },
      exec: {
        options: {
          exec: 'less'
        }
      }
    },
    less: {
      development: {
        options: {
          //paths: ["assets/styles"]
        },
        files: {
          "public/assets/styles/bootstrap.css": "frontend/components/bootstrap/less/bootstrap.less",
          "public/assets/styles/app.css" : "frontend/styles/app.less"
        }
      },
      /*
      production: {
        options: {
          paths: ["assets/css"],
          yuicompress: true
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
      */
    },
    stitch: {
      options: {
        paths: [
          'frontend/scripts'
        ],
        dependencies: [
          'frontend/components/bacon/dist/Bacon.js'
        ],
        dest: 'public/assets/scripts/app.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'server/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          Bacon: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    clean: ["public/*"],
    watch: {
      options: {
        livereload: true
      },
      files: ['server/**/*', 'fontend/**/*'],
      tasks: ['jshint', 'batch']
    }
  };

  grunt.initConfig(configs);

  grunt.task.registerTask('public-dirs', 'makes the public directories' +
    'for assetts generated into', function() {
     grunt.file.mkdir('public/assets/scripts');
     grunt.file.mkdir('public/assets/styles');
     grunt.file.mkdir('public/assets/images');
     grunt.file.mkdir('public/assets/fonts');
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-stitch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('batch', ['public-dirs', 'less', 'stitch']);
  grunt.registerTask('server', ['batch', 'concurrent']);

};
