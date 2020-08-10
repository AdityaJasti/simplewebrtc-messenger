const express = require('express'),https = require('https'),fs = require('fs')

const app = express();
const port = 3000;

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

/* app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
}); */
https.createServer({
  key: fs.readFileSync('webRTCserver.key'),
  cert: fs.readFileSync('webRTCserver.cert')
}, app).listen(port, () => {
  console.log('Listening...')
})