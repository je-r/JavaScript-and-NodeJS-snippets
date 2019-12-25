let qrcode = require('qrcode')
let http = require('http')

let server = http.createServer((req,res)=>{
  res.setHeader('content-type','image/png');
  var text2encode = "https://github.com/je-r";
  qrcode.toFileStream(res, 
    text2encode);
    console.log("file served");
})

server.listen(8080,()=>console.log('listening'));