// in JavaScript console of your browser enter the following code
var stream = await navigator.mediaDevices.getUserMedia({video:{}});
// now a pop-up will appear asking you to access to camera, please confirm it!
// then type:
const [track] = stream.getVideoTracks();
track.getCapabilities();
// and now you can click on the object and expand it to see the values!
