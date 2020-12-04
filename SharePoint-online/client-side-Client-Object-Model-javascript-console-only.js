// step 1

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

// step 2

loadjscssfile("_layouts/1033/init.js","js");
loadjscssfile("_layouts/15/MicrosoftAjax.js","js");

// step 3

loadjscssfile("_layouts/15/sp.core.js","js");
loadjscssfile("_layouts/15/sp.runtime.js","js");
loadjscssfile("_layouts/15/sp.js","js");
loadjscssfile("_layouts/15/SP.RequestExecutor.js","js");

// step 4

var siteUrl = "/sites/someExistingSite";
var ctx = new SP.ClientContext(siteUrl);

// step 4


function onQuerySucceeded() {

    var listInfo = '';

    var listEnumerator = collList.getEnumerator();

    while (listEnumerator.moveNext()) {
        var oList = listEnumerator.get_current();
        listInfo += 'Title: ' + oList.get_title() + ' Created: ' + oList.get_created().toString() + '\n';
    }
    console.log(listInfo);
}

function onQueryFailed(sender, args) {
    console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

function retrieveAllListProperties() {

    var clientContext = new SP.ClientContext(siteUrl);
    var oWebsite = clientContext.get_web();
    this.collList = oWebsite.get_lists();
 
    clientContext.load(collList);

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


// step 4

retrieveAllListProperties();

