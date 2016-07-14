$(document).ready(function() {

    activeGallery = "#portrait-container";

    $("#portraits").click(function (e)
    {
        e.preventDefault();
        $(activeGallery).hide();
        $("#portrait-container").show();
        activeGallery="#portrait-container";
    });

    $("#pets").click(function (e)
    {
        e.preventDefault();
        $(activeGallery).hide();
        $("#pet-container").show();
        activeGallery="#pet-container";
    });

    $("#events").click(function (e)
    {
        e.preventDefault();
        $(activeGallery).hide();
        $("#event-container").show();
        activeGallery= "#event-container";
    });

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
        auto:true,
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
        auto:true,
        loop:true,
        keyPress:true,
        onSliderLoad: function() {
            $('#events-image-gallery').removeClass('cS-hidden');
        }  
    });
});