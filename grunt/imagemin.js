module.exports = {
    main: {
        files: [{
            expand: true,
            cwd: 'src/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/img'
        }]
    }
}