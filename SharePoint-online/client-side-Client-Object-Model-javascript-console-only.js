
function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}


loadjscssfile("_layouts/1033/init.js","js");
loadjscssfile("_layouts/15/MicrosoftAjax.js","js");
loadjscssfile("_layouts/sp.core.js","js");
loadjscssfile("_layouts/sp.runtime.js","js");
loadjscssfile("_layouts/sp.js","js");
var ctx = new SP.ClientContext("/");
