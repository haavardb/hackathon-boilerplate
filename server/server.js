// dev-server.js
const express = require('express');
const app = express();
const cors = require('cors');

// Import routes
const api = require('./api');

app.use(cors());

app.use('/api', api);

app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('Node App Started');
});
