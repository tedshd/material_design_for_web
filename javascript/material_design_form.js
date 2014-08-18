/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-16 01:26:39
 * @version $Id$
 */

$(function() {
    $('.material-design-form').on('reset', function() {
        $('.material-design-label').removeClass('input-focus');
    });
    $('.material-design-form').on('focus', 'input', function() {
        $('+ .material-design-label', this).addClass('input-focus');
    });
    $('.material-design-form').on('blur', 'input', function() {
        if (0 >= $(this).val().length) {
            $('+ .material-design-label', this).removeClass('input-focus');
        }
    });
});