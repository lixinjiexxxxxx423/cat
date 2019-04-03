const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/user.js');
const bookRouter = require('./router/book.js');
var server = express();
server.listen(5050);
server.use(bodyParser.urlencoded({
  extended:false
}));
server.use(express.static('./public'));
server.use('/user',userRouter);
server.use('/book',bookRouter); 
