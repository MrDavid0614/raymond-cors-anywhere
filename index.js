const cors_proxy = require('cors-anywhere');

const port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen( { port, host: 'localhost' }, () => {
    console.log( `Running CORS Anywhere on port: ${ port }` );
});