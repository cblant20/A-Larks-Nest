$(document).ready(function() {
	$("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    $('#image-gallery').lightSlider({
<<<<<<< Updated upstream
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
=======
        //gallery:true,
        item: 1,
        thumbItem: 17,
        slideMargin: 0,
        pause: 5000,
        enableDrag: false,
        auto: true,
        loop: true,
        keyPress: true,
>>>>>>> Stashed changes
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});