// catch click on menu icon to toggle dropdown menu
$('.menu').click(function() {
    $('.dropmenu').toggleClass('show');
});

// catch click outside of menu to close dropdown menu
$(document).mouseup(function(event) {
    // if the target is neither the dropdown menu, nor the menu icon, nor a descendant
    if ( !$('.dropmenu').is(event.target) && !$('.menu').is(event.target) && $('.dropmenu').has(event.target).length == 0 ) {
        // remove show class from dropdown menu
        $('.dropmenu').removeClass('show');
    }
});

// catch click on transparent button to close pop-up
$('.btn-transparent').click(function() {
    $('footer').removeClass('show');
});
