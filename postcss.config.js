

const config = {
    plugins: [
        require('postcss-nested'),
        require('postcss-preset-env')({stage: 1}),
    ]
}

module.exports = config;
