$(document).ready(function() {
    $('#image-gallery').lightSlider({
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
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});