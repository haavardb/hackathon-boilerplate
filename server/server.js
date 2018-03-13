const express = require('express');
const cors = require('cors');

const app = express();

// Import routes
const api = require('./api');

app.use(cors());

app.use('/api', api);

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`Node add started at http://localhost:${app.get('port')}`);
});
