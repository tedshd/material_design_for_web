/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-09-01 09:33:50
 * @version $Id$
 */

(function() {
    // add class
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

    // delegate event
    var div = document.createElement("div"),
        prefix = ["moz", "webkit", "ms", "o"].filter(function(prefix) {
            return prefix + "MatchesSelector" in div;
        })[0] + "MatchesSelector";

    Element.prototype.addDelegateListener = function(type, selector, fn) {
        this.addEventListener(type, function(e) {
            var target = e.target;

            while (target && target !== this && !target[prefix](selector)) {
                target = target.parentNode;
            }

            if (target && target !== this) {
                return fn.call(target, e);
            }

        }, false);
    };

    // form
    for (var i = document.querySelectorAll('.material-design-form input').length - 1; i >= 0; i--) {
        document.querySelectorAll('.material-design-form input')[i].addEventListener('focus', function(e) {
            addClass(e.target.nextElementSibling, 'input-focus');
        });
    }

    for (var i = document.querySelectorAll('.material-design-form input').length - 1; i >= 0; i--) {
        document.querySelectorAll('.material-design-form input')[i].addEventListener('blur', function(e) {
            if (0 >= e.target.value.length) {
                removeClass(e.target.nextElementSibling, 'input-focus');
            }
        });
    }

    for (var i = document.querySelectorAll('.material-design-form textarea').length - 1; i >= 0; i--) {
        document.querySelectorAll('.material-design-form textarea')[i].addEventListener('focus', function(e) {
            addClass(e.target.nextElementSibling, 'input-focus');
        });
    }

    for (var i = document.querySelectorAll('.material-design-form textarea').length - 1; i >= 0; i--) {
        document.querySelectorAll('.material-design-form textarea')[i].addEventListener('blur', function(e) {
            if (0 >= e.target.value.length) {
                removeClass(e.target.nextElementSibling, 'input-focus');
            }
        });
    }

    // checkbox
    document.querySelector('body').addDelegateListener('click', '.material-design-checkbox input[type="checkbox"]', function(e){
        addClass(e.target.nextElementSibling.firstElementChild, 'show');
        setTimeout(function() {
            removeClass(e.target.nextElementSibling.firstElementChild, 'show');
        }, 300);
    });

    // radio
    document.querySelector('body').addDelegateListener('click', '.material-design-radio input[type="radio"]', function(e){
        addClass(e.target.nextElementSibling.firstElementChild, 'show');
        setTimeout(function() {
            removeClass(e.target.nextElementSibling.firstElementChild, 'show');
        }, 300);
    });

    // switch
    document.querySelector('body').addDelegateListener('click', '.material-design-switch input[type="checkbox"]', function(e){
        console.log(e);
        addClass(e.target.nextElementSibling.firstElementChild, 'show');
        setTimeout(function() {
            removeClass(e.target.nextElementSibling.firstElementChild, 'show');
        }, 300);
    });

    // button
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
        return false;
    };

    document.addEventListener('click', addRippleEffect, false);
})();