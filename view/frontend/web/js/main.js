// Find more information for key codes in: https://keycode.info/

require(['jquery'], function ($) {

    // Disable Contextmenu, Disable Right Click;
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey) {
            // Disable CTRL -> CTRL+C, CTRL+V, CTRL+A, CTRL+SHIFT+I, CTRL+U
            event.preventDefault();
        } else if (event.keyCode === 123 || event.keyCode === 91 || event.keyCode === 93) {
            // Disable F12 || Windows Key and Command Key
            event.preventDefault();
        }
    });


});
