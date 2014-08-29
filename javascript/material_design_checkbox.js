/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-29 15:01:07
 * @version $Id$
 */

$(function() {
    $('.material-design-checkbox').on('click', 'input', function() {
        var _this = $(this);
        $('.ripple', $(this).parent()).addClass('show');
        setTimeout(function() {
            $('.ripple', _this.parent()).removeClass('show');
        }, 300);
    });
});
