/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-16 01:26:39
 * @version $Id$
 */

$(function() {
    $('.material-input-group').on('reset', function() {
        $('.material-design-label').removeClass('input-focus');
    });
    $('.material-input-group').on('focus', 'input', function() {
        $('+ .material-design-label', this).addClass('input-focus');
    });
    $('.material-input-group').on('blur', 'input', function() {
        if (0 >= $(this).val().length) {
            $('+ .material-design-label', this).removeClass('input-focus');
        }
    });
    $('.material-input-group').on('focus', 'textarea', function() {
        $('+ .material-design-label', this).addClass('input-focus');
    });
    $('.material-input-group').on('blur', 'textarea', function() {
        if (0 >= $(this).val().length) {
            $('+ .material-design-label', this).removeClass('input-focus');
        }
    });
});