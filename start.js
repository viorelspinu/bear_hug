
let targetValue = 0;
let currentValue = 0;
let lastUpdateTime = 0;
let started = false;
let win = false;

setInterval(updateHeart, 10);
setInterval(toggle, 1000);

function updateHeart() {
    currentValue = currentValue + ((targetValue - currentValue) / 5);
    if (currentValue > 70) {
        $("#share").show();
    } else {
        $("#share").hide();
    }
    document.getElementById("heart").ldBar.set(currentValue);
}

function toggle() {
    if (!started) {
        return;
    }
    var d = new Date();
    var currentTime = d.getTime();
    if ((currentTime - lastUpdateTime) > 1000 * 10) {
        if (!videoVisible) {
            show('video');
            $('body').css('backgroundImage', 'url()');
            $("#share").hide();
        }
    }
}

function set(value) {
    if (!value) {
        return;
    }
    targetValue = value;
}

function update(event) {
    if (!((event.charCode >= 48) && (event.charCode < 60))) {
        return;
    }
    var value = event.charCode - 48;
    if (value > 2) {
        var d = new Date();
        lastUpdateTime = d.getTime();

        if (videoVisible) {
            show('heart');
        }
    }

    if (value > 6) {
        $('body').css('backgroundImage', 'url(img/hearts.png)');
    }

    console.log(String.fromCharCode(event.charCode));
    set(value * 14);
}






function start() {
    $(".bg_heart").show();
    openFullscreen();
    $('#start').hide();
    show('video');
    started = true;
}

function show(what) {
    if (what == 'video') {
        $("#video").show();
        $("#heart").hide();

        videoVisible = true;
    }
    if (what == 'heart') {
        $("#video").hide();
        $("#heart").show();

        videoVisible = false;
    }
}



function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    var elem = document.documentElement;
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
