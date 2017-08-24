const express = require('express');
const fs = require('fs');
const bp = require('body-parser');
let app = express();
let event = [];

// handler
app.post('/event/add',
bp.urlencoded({extended: true}),
function(request, response){
    console.log(request.body.event);
    console.log(request.body.motor);
    response.send("success")
});

app.use(express.static("public"));

app.listen(3004, function() {
    console.log('Server listening on port 8000...');
});
