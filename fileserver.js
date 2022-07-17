var static = require('node-static'); 
var http = require('http'); 

const port = process.env.PORT || 3000 


//serve all the files in the public folder 
var file = new(static.Server)('./public'); 

//make route / 
http.createServer(function (req, res) { 
    req.addListener('end', function () { 
        file.serve(req, res); 
    }).resume(); 
    } 
).listen(port); 
console.log('Server running at http://localhost/:' + port);