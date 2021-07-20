$(function() {
    var header = $('.header')
    var headerHeight = header.height()
    var introHeight = $('.intro').height()

    var burgMenu = $('.header-burger__menu')
    var btnBurgMenu = $('.header-burg')

    $(window).scroll(function () { 
        if($(this).scrollTop() > introHeight) {
            header.css({
                'background': '#252b42',
                'position':'fixed',
                'display': 'block',
                'transition': '.3s',
                'zIndex': '5'
            })
            
            $('body').css('paddingTop',headerHeight + 20 + 'px')
        } else {
            header.css({
                'background': 'none',
                'display': 'block',
                'position':'absolute',
                
            })
            $('body').css('paddingTop', '0')
        }

        if($(window).scroll) {
            burgMenu.css({
                'display': 'none'
            });
        }
    });

    

    btnBurgMenu.on('click', function () {
        if(burgMenu.css('display') === 'none') {
            header.css({
                'background': '#252B42',
                'transition': '.3s'
            })
            burgMenu.css({
                'display': 'none',
            }).slideToggle(1000);
        } else {
            header.css({
                'background': '#252B42',
                'transition': '.3s'
            })
            burgMenu.css({
                'display': 'block',
            }).slideToggle(1000);
        }
        
    });
})