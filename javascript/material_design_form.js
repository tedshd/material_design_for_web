/*global $, jQuery, alert, console, window, document, angular*/
/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2014-08-16 01:26:39
 * @version $Id$
 */

$(function() {
    $('body').on('focus', 'input[type="text"]', function() {
        $('+ .material-design-label', this).addClass('input-focus');
    });
    $('body').on('blur', 'input[type="text"]', function() {
        if (0 >= $(this).val().length) {
            $('+ .material-design-label', this).removeClass('input-focus');
        }
    });
});