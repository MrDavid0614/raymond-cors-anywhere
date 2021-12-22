const cors_proxy = require('cors-anywhere');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen( port, host, () => {
    console.log( `Running CORS Anywhere on: https://${ host }:${ port }` );
});