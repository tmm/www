module.exports = function(grunt){

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

    // compile sass
    sass: {
      build: {
        files: {
            'css/styles.min.css': 'scss/styles.scss'
        },
      },
    },

    // minify css
    cssmin: {
      build: {
        src: 'css/styles.min.css',
        dest: 'css/styles.min.css'
      },
    },

    // watch for changes
    watch: {
      css: {
        files: ['scss/modules/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },
    },
    
    });

    // loads
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};
