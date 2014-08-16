/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-16 20:24:06
 * @version $Id$
 */

(function() {

    function addClass(dom, className) {
        if (dom.classList) {
            dom.classList.add(className);
        } else {
            dom.className += ' ' + className;
        }
    }

    // remove class
    function removeClass(dom, className) {
        if (dom.classList) {
            dom.classList.remove(className);
        } else {
            var reg = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
            dom.className = dom.className.replace(reg, ' ');
        }
    }

    for (var i = document.querySelectorAll('input[type="text"]').length - 1; i >= 0; i--) {
        document.querySelectorAll('input[type="text"]')[i].addEventListener('focus', function(e) {
            addClass(e.target.nextElementSibling, 'input-focus');
        });
    };

    for (var i = document.querySelectorAll('input[type="text"]').length - 1; i >= 0; i--) {
        document.querySelectorAll('input[type="text"]')[i].addEventListener('blur', function(e) {
            if (0 >= e.target.value.length) {
                removeClass(e.target.nextElementSibling, 'input-focus');
            }
        });
    };

})();