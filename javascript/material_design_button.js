/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-16 19:05:45
 * @version $Id$
 */

(function() {
    var addRippleEffect = function (e) {
        var target = e.target;
        if (target.tagName.toLowerCase() !== 'button' && target.tagName.toLowerCase() !== 'a') {
            return false;
        }
        var rect = target.getBoundingClientRect(),
            ripple = target.querySelector('.ripple');
        if (!ripple) {
            ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
            target.appendChild(ripple);
        }
        ripple.classList.remove('show');
        var top = e.pageY - rect.top - ripple.offsetHeight / 2 - window.pageYOffset,
            left = e.pageX - rect.left - ripple.offsetWidth / 2 - window.pageXOffset;
        ripple.style.top = top + 'px';
        ripple.style.left = left + 'px';
        ripple.classList.add('show');
        target.addEventListener('animationend', function () {
            ripple.classList.remove('show');
        });
        return false;
    };

    document.addEventListener('click', addRippleEffect, false);
})();
