(function($){
    $(document).ready(function(){

        $('.menu_btn').on('click', function() {
            $(this).toggleClass('active');
            $('.order_menu').toggleClass('active');
            $('.login_final').toggleClass('active');
        });

        $('.steps.step1 .check-date').on('click', function() {
            $('.steps.step1 .check-date').removeClass('active');
            $(this).addClass('active');
            $('.steps.step1').addClass('clicked');

            setTimeout(function() {
                $('.steps.step3 .choose-time').removeAttr('style');
                $('.steps.step3').removeClass('active');
                $('.steps.step4').removeClass('active');
                $('.steps.step5').removeClass('active');

                $('.steps.step2').addClass('active');
            }, 2000);
        });

        $('.steps.step2 .choose-time p').on('click', function() {
            $('.steps.step2').css({"transform": "scale(0)", "transition": "0.8s"});

            setTimeout(function() {
                $('.steps.step2').removeClass('active').removeAttr('style');
                $('.steps.step3').addClass('active').css("margin-top", "100px");
            }, 800);

            setTimeout(function() {
                $('.steps.step3').removeAttr('style');
            }, 2000);
            setTimeout(function() {
                $('.steps.step3 .choose-time').css("display", "block");
            }, 4000);
            setTimeout(function() {
                $('.steps.step3 .choose-time').css({"opacity": "1", "transition": "0.8s"});
            }, 5000);
        });

        $('.steps.step3 .choose-time p').on('click', function() {
            $('.steps.step3 .choose-time').css({"transform": "scale(0)", "transition": "0.8s"});

            setTimeout(function() {
                $('.steps.step3 .choose-time').removeAttr('style');
                $('.steps.step4').addClass('active');
            }, 800);

            setTimeout(function() {
                $('.steps.step5').addClass('active');
                $('.arrival_time span').css("opacity", "1");
                $('.step3 .arrival_time').css("cursor", "pointer");
            }, 2000);
        });

        $('.steps.step3 .arrival_time').on('click', function() {
            $('.steps.step5').css({"margin-top": "30px", "opacity": "0", "transition": "all 0.6s"});
            $('.steps.step4').css({"margin-top": "30px", "opacity": "0", "transition": "all 0.8s"});

            setTimeout(function() {
                $('.steps.step4').removeClass('active').removeAttr('style');
                $('.steps.step5').removeClass('active').removeAttr('style');
                $('.steps.step3 .choose-time').css("display", "block");
            }, 1000);
            setTimeout(function() {
                $('.steps.step3 .choose-time').css({"opacity": "1", "transition": "0.8s"});
            }, 1500);
        });
        $('.steps.step5 .btn').on('click', function() {
            $('.steps.step6').addClass('active');
        });
    });
})(jQuery);