const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hello Syed Ibrahim!');
});

const options = {
    port: 8080
}

app.listen(options, function(){
    console.log(`App is running on port 8080`)
})