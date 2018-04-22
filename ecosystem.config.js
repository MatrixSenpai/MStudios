module.exports = {
    apps: [{
        name: "ms_site",
        script: './index.js',
        watch: false,
        env: {
            'NODE_ENV': 'production'
        }
    }]
}