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

var titleText = ["n", "n_", "ne", "ne_", "nek", "nek_", "neko", "neko_", "nekoh", "nekoh_", "nekoho", "nekoho_", "nekohoo, "nekohoo_", "nekohook", "nekohook_", "nekohook", "nekohook", "nekohoo", "nekohoo_", "nekoho", "nekoho_", "neko", "nekoho_", "nekoho", "nekoo", "nekohook_", "nekohook", "nekohoo", "nekohoo_", "nekoho", "nekoho_", "nekoh", "neko", "neko_", "nek", "ne_", "n" ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}
