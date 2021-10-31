require(['jquery'], function ($) {

    document.addEventListener('contextmenu', event => event.preventDefault());

    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.keyCode === 17) {
            return false;
        }
    };

    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.keyCode === 123) {
            return false;
        }
    };

    document.onmousedown = function (e) {
        e = e || window.event;
        if (e.keyCode === 123) {
            return false;
        }
    };

    document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode === 123) {
            return false;
        }
    };

    window.onkeyup = function (e) {
        if (e.which === 17) n = false;
    };

    window.onkeydown = function (e) {
        if (e.which === 17) n = true;
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
