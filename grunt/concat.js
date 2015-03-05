module.exports = function(grunt){
    return {
        options: {
            process: function (src, filepath) {
                var css = grunt.file.read('build/css/supersloth.min.css');
                return src.replace('{css_placeholder}', css);
            }
        },
        main: {
            src: ['src/js/supersloth.js'],
            dest: 'build/js/supersloth.js'
        }
    }
}