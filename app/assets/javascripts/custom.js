$(document).ready(function() {
    //this doesn't trigger when I navigate to home from any other page

    activeGallery = "#portrait-container";
    $("#pet-container").addClass("cS-hidden");
    $("#event-container").addClass("cS-hidden");

    $("#portraits").click(function (e)
    {
        e.preventDefault();
        $(activeGallery).addClass("cS-hidden");
        $("#portrait-container").removeClass("cS-hidden");
        activeGallery="#portrait-container";
    });

    $("#pets").click(function (e)
    {
        e.preventDefault();
        $(activeGallery).addClass("cS-hidden");
        $("#pet-container").removeClass("cS-hidden");
        activeGallery="#pet-container";
    });

    $("#events").click(function (e)
    {
        e.preventDefault();
        $(activeGallery).addClass("cS-hidden");
        $("#event-container").removeClass("cS-hidden");
        activeGallery= "#event-container";
    });

/*
set the following based on device screen size to fix up your gallery
vertical    boolean false   change slide's direction from horizontal to Vertical
verticalHeight  number  500 set height of slider if vertical mode is active and item more than 1
vThumbWidth
how to handle landscape images on mobile and portrait on desktop
use $(window).width to determine gallery setup. Dry these functions out.

*/
    $('#pets-image-gallery').lightSlider({
        //gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        pause: 5000,
        enableDrag: false,
        auto:true,
        loop:true,
        keyPress:true,
        onSliderLoad: function() {
            $('#pets-image-gallery').removeClass('cS-hidden');
        }  
    });    

    $('#portraits-image-gallery').lightSlider({
        //gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        pause: 5000,
        enableDrag: false,
        loop:true,
        keyPress:true,
        onSliderLoad: function() {
            $('#portraits-image-gallery').removeClass('cS-hidden');
        }  
    });

    $('#events-image-gallery').lightSlider({
        //gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        pause: 5000,
        enableDrag: false,
        loop:true,
        keyPress:true,
        onSliderLoad: function() {
            $('#events-image-gallery').removeClass('cS-hidden');
        }  
    });
});