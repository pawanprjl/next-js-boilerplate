const withLess = require('next-with-less');

module.exports = withLess({
    lessLoaderOptions: {
        lessOptions: {
            'primary-color': '#1282a0',
            'border-radius-base': '4px',
            'font-size-base': '13px',
        },
    },
});
