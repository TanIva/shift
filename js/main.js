(function($){
    $(document).ready(function(){

        $('.menu_btn').on('click', function() {
            $(this).toggleClass('active');
            $('.order_menu').toggleClass('active');
        });
    });
})(jQuery);