$(index.html).ready(function() {

    if ((screen.width>1024)) {
        // if screen size is 1025px wide or larger
        //$(".hide").css('display', 'none'); // you can also use $(".yourClass").hide();
    }
    elseif ((screen.width<=1024)) {
        // if screen size width is less than 1024px
        $(".hide").hide(); // here you can also use show();
    }
})
