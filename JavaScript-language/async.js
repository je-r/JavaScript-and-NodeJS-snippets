console.log("testing 1\r\n"+new Date());


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

(async function() {
  wait(5000);
  console.log("testing 2\r\n"+new Date());
})();


console.log("testing 3\r\n"+new Date());