var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs');


app.listen(8080); // oort untuk listening 



function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


io.sockets.on('connection', function (socket) {
  // menagkapa  pesan dari client   dengan  variable "data_dari_client"
  socket.on('data_dari_client', function(data) {
  console.log('data input : '+data);
   socket.emit('echo_data',  data ); // emit berarti mengirimkan , data dikimkan  kebali ke client dengan varirble  echo_data  
    
  });

 
});