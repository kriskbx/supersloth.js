module.exports = {
    options: {
        mangle: true,
        banner: "/**\n * SUPERSLOTH.JS\n * Created by kris (http://github.com/kriskbx - http://kris.cool)\n * Licensed under the MIT license\n */\n"
    },
    main: {
        files: {
            'dist/supersloth.js': ['build/js/supersloth.js']
        }
    }
}