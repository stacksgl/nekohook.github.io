if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = ["n", "n_", "ne", "ne_", "nek", "nek_", "neko", "neko_", "nekoh", "nekoh_", "nekohoo", "nekohoo_", "nekohook", "nekohook_", "nekohoo", "nekohoo_", "nekoho_", "nekoh", "nekoh_", "neko", "neko_", "neko", "nekoh_", "nekohoo", "nekoo_", "nekohook", "nekohoo", "nekoho_", "neko", "nek_", "ne", "n_" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}