/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    //responsive_images: {
    //  dev: {
    //    options: {
    //      engine: 'im',
    //      sizes: [{
    //          width:800,
    //          suffix: "_2x",
    //          quality:75
    //        },{
    //          width:800,
    //          suffix: "_1x",
    //          quality:40
    //        },{
    //          width:1300,
    //          suffix: "_2x",
    //          quality:75
    //        },{
    //          width:1300,
    //          suffix: "_1x",
    //          quality:40
    //      }]
    //    },
    //
    //    /*
    //    You don't need to change this part if you don't change
    //    the directory structure.
    //    */
    //    files: [{
    //      expand: true,
    //      src: ['*.{gif,jpg,png}'],
    //      cwd: 'images_src/',
    //      dest: 'Images/'
    //    }]
    //  }
    //},
    //
    ///* Clear out the images directory if it exists */
    //clean: {
    //  dev: {
    //    src: ['Images']
    //  }
    //},
    //
    ///* Generate the images directory if it is missing */
    //mkdir: {
    //  dev: {
    //    options: {
    //      create: ['Images']
    //    }
    //  }
    //},
    //
    ///* Copy the "fixed" images that don't go through processing into the images/directory */
    //copy: {
    //  dev: {
    //    files: [{
    //      expand: true,
    //      src: 'images_src/fixed/*.{gif,jpg,png,svg}',
    //      dest: 'Images/'
    //    }]
    //  }
    //},

    critical: {
      dist: {
        options: {
          base: './'
        },
        // The source file
        src: 'index.html',
        // The destination file
        dest: 'result.html'
      }
    }
  });
  
  //grunt.loadNpmTasks('grunt-responsive-images');
  //grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-mkdir');
  //grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');

  // Default tasks.
  grunt.registerTask('default', ['critical']);

};
