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
                $('.steps.step2').addClass('active');
            }, 2000);

        });
    });
})(jQuery);