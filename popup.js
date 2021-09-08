let img = document.getElementById('this-icon');
let text = document.getElementById('text-link');

// spin icon when open
setTimeout(() => {
    img.style.transform="rotate(360deg)";
}, 1000)

// fade in icon after spin finished
setTimeout(() => {
    text.style.opacity="1";
}, 1900)

// open links in new tab
document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});