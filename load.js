(function() {
    const secs = ['johndoe', 'maryallen','davidgreen','paulbunyan','aboutme', 'aboutme2', 'aboutme3', 'morelinks'];
    for (const i of secs) {
        const li = document.createElement("li");
        const bodyy = document.body.getBoundingClientRect().y;
        const secy = document.querySelector(`[data='${i}']`).getBoundingClientRect().y;
        const y = secy - bodyy;
        navs = document.querySelector("nav ul");
        const anchor = document.createElement("a");
        anchor.innerHTML = i;
        li.appendChild(anchor);

        li.addEventListener('click', function() {
            scrollTo(0, y)
        });
        const alldata = document.querySelectorAll(`[data]`);
        for (j of alldata) {
            j.removeAttribute('activesec');
        }
        document.querySelector(`[data='${i}']`).setAttribute('activesec', 'active');
        navs.appendChild(li);
    }
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