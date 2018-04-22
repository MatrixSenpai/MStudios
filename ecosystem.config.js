module.exports = {
    apps: [{
        name: "ms_site",
        script: './index.js',
        watch: false,
        env: {
            'PORT': '8211',
            'NODE_ENV': 'production'
        }
    }]
}