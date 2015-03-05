module.exports = function(grunt) {
    grunt.initConfig({
        'gh-pages': {
            options: {
                // Options for all targets go here.
            },
            'gh-pages': {
                options: {
                    base: 'build'
                },
                src: ['dist/*']
            }
        }
    });
}