module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
        options: {
            port: 9000
        }
    },
    less: {
      min: {
        options: {
          paths: ['assets/css'],
          compress:true
        },
        files: {
          'assets/css/style.css': 'assets/less/import.less',
          'assets/css/style2.css': 'assets/less/import2.less'
        }
      },
      dev: {
        options: {
          paths: ['assets/css'],
          dumpLineNumbers:"comments"
        },
        files: {
          'assets/css/style.div.css': 'assets/less/import.less',
          'assets/css/style2.div.css': 'assets/less/import2.less'
        }
      }
    },
    watch: {
  scripts: {
    files: ['assets/less/*.less'],
    tasks: ['less'],
    options: {
      spawn: false,
    },
  },
},
includes: {
    dist:{
      cwd:'src/view',
      src:['**/*.html'],
      dest:'dist/view',
      options:{
        flatten:true,
        includePath:'src/view/includes/'
      }
    }

  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
