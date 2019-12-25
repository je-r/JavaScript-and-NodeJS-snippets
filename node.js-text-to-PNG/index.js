
let http = require('http');

let textToPicture = require('text-to-picture')

let server = http.createServer((req,res)=>{
    res.setHeader('content-type','image/png');
  res.setHeader('Cache-Control','no-cache');

textToPicture.convert({
  text: 'test: '+ new Date(),
   size: 16,
   width: 1000,
   height: 30,
   quality: 100,
   ext: "png"
}).then(result => {
  return result.getBuffer()
}).then(str => {
  res.end(str) 
}).catch(err => console.log(err))

 
 
});
 

server.listen(8080,()=>console.log('listening'));

