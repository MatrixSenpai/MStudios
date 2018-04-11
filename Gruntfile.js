module.exports = function(grunt) {
    grunt.initConfig({
        pug: {
            compile: {
                files: {
                    'docs/index.html': 'views/index.pug'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');

    grunt.registerTask('default', ['pug']);
}