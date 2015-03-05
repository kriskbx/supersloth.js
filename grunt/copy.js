module.exports = {
    totest: {
        files: [
            {expand: true, src: ['dist/*'], dest: 'test/', filter: 'isFile', flatten: true}
        ]
    }
}