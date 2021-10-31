// Find more information for key codes in: https://keycode.info/

require(['jquery'], function ($) {

    // Prevent opening contextmenu, which is opened by right click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 17 -> ctrl key
    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.keyCode === 17) {
            return false;
        }
    };

    // 17 -> ctrl key
    window.onkeyup = function (e) {
        if (e.which === 17) n = false;
    };

    // 123 -> f12 key
    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.keyCode === 123) {
            return false;
        }
    };

    // 123 -> f12 key
    document.onmousedown = function (e) {
        e = e || window.event;
        if (e.keyCode === 123) {
            return false;
        }
    };

    // 123 -> f12 key
    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode === 123) {
            return false;
        }
    };

    // 17 -> ctrl key
    // 65 -> a key
    // 67 -> c key
    // 74 -> j key
    // 83 -> s key
    // 85 -> u key
    // 86 -> v key
    // 88 -> x key
    window.onkeydown = function (e) {
        if (e.which === 17) n = true;
        if ((e.which === 85 || e.which === 65 || e.which === 74 || e.which === 88 || e.which === 67 || e.which === 86 || e.which === 83) && n === true) {
            return false;
        }
    };

    // 91 and 93 are the Windows Keys or Command Key
    window.onkeydown = function (e) {
        if (e.which === 91) n = true;
        if ((e.which === 85 || e.which === 65 || e.which === 74 || e.which === 88 || e.which === 67 || e.which === 86 || e.which === 83) && n === true) {
            return false;
        }
    };
    window.onkeydown = function (e) {
        if (e.which === 93) n = true;
        if ((e.which === 85 || e.which === 65 || e.which === 74 || e.which === 88 || e.which === 67 || e.which === 86 || e.which === 83) && n === true) {
            return false;
        }
    };

    // Command Option C on mac inspect elements
    window.onkeydown = function (e) {
        if (e.which === 91) n = true;
        if (e.which === 18) n = true;
        if ((e.which === 85 || e.which === 65 || e.which === 74 || e.which === 88 || e.which === 67 || e.which === 86 || e.which === 83) && n === true) {
            return false;
        }
    };
    window.onkeydown = function (e) {
        if (e.which === 93) n = true;
        if (e.which === 18) n = true;
        if ((e.which === 85 || e.which === 65 || e.which === 74 || e.which === 88 || e.which === 67 || e.which === 86 || e.which === 83) && n === true) {
            return false;
        }
    };

    $(document).keydown(function (event) {
        if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
            return false;
        }
    });

});
