/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-29 20:45:01
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
        this.addEventListener(type, function(e){
            var target = e.target;

            while(target && target !== this && !target[prefix](selector)) {
                target = target.parentNode;
            }

            if(target && target !== this) {
                return fn.call( target, e );
            }

        }, false);
    };

    document.querySelector('body').addDelegateListener('click', '.material-design-radio input[type="radio"]', function(e){
        addClass(e.target.nextElementSibling.firstElementChild, 'show');
        setTimeout(function() {
            removeClass(e.target.nextElementSibling.firstElementChild, 'show');
        }, 300);
    });

})();
