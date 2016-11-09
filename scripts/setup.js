(function (root) {

    'use strict';

    function bootstrap() {

        var debug = true;
        var menu = new root.Menu(debug);

    }

    window.addEventListener('load', bootstrap);

}(this));
