/** @type {import('postcss-load-config').Config} */




const config = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-preset-env')({stage: 1}),
    ]
}

module.exports = config;