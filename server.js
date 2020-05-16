const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(port, (err) => {
    console.log(`Server started on port : ` + port);
});