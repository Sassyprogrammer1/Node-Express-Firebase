const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router');
const cors = require('cors');
app.use(bodyParser.json({limit: '5mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

app.options('*', cors())
app.use('/api',router);


app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000!");
})