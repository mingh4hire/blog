(function() {

    var x = new XMLHttpRequest();

    x.onreadystatechange = (function(e) {
        console.log("ready", x)
        console.log(e);
        if (x.readyState === 4) {
            if (x.status === 200 || x.status == 0) {
                var allText = x.responseText;
                document.x = x.responseText;
                // /section id=""/
            }
        }

    });
    x.onload = (function(e) {
        console.log("loading", x)
        console.log(e);
    });
    x.open("get", "index.html");
    x.send();
    console.log("done")

})();